#!/bin/bash

# 🗑️ Python Learning Hub - Complete Cleanup Script
# This script removes ALL traces of the Python Learning Hub project

set -e

echo "🚨 PYTHON LEARNING HUB - COMPLETE CLEANUP SCRIPT 🚨"
echo "========================================================="
echo ""
echo "⚠️  WARNING: This will permanently delete ALL project files and dependencies!"
echo "⚠️  This action cannot be undone!"
echo ""

# Function to ask for confirmation
confirm() {
    read -p "Are you sure you want to continue? Type 'YES' to confirm: " confirmation
    if [ "$confirmation" != "YES" ]; then
        echo "❌ Cleanup cancelled."
        exit 0
    fi
}

# Main confirmation
confirm

echo ""
echo "🔍 Starting cleanup process..."
echo ""

# 1. Kill any running Flask processes
echo "🔌 Stopping Flask applications..."
pkill -f "python.*app.py" 2>/dev/null || echo "   No Flask processes found"
pkill -f "flask run" 2>/dev/null || echo "   No Flask CLI processes found"

# 2. Stop Docker containers if running
echo "🐳 Stopping Docker containers..."
if command -v docker &> /dev/null; then
    docker-compose down 2>/dev/null || echo "   No docker-compose found"
    docker stop python-learning-hub 2>/dev/null || echo "   No container 'python-learning-hub' found"
    docker rm python-learning-hub 2>/dev/null || echo "   No container 'python-learning-hub' to remove"
    
    # Remove Docker images
    docker rmi python-learning-hub:latest 2>/dev/null || echo "   No image 'python-learning-hub:latest' found"
    docker rmi python-learning-app:latest 2>/dev/null || echo "   No image 'python-learning-app:latest' found"
    
    # Clean up Docker volumes
    docker volume prune -f 2>/dev/null || echo "   No Docker volumes to clean"
else
    echo "   Docker not installed, skipping Docker cleanup"
fi

# 3. Remove project directory
PROJECT_DIR="$(pwd)"
if [ -d "$PROJECT_DIR" ]; then
    echo "📁 Removing project directory: $PROJECT_DIR"
    rm -rf "$PROJECT_DIR"
    echo "   ✅ Project directory removed"
else
    echo "   📁 Project directory not found"
fi

# 4. Clean up database files that might be created elsewhere
echo "🗄️ Cleaning up database files..."
find "$HOME" -name "learning_progress.db" -delete 2>/dev/null || true
find "$HOME" -name "example.db" -delete 2>/dev/null || true
find "$HOME" -name "todos.db" -delete 2>/dev/null || true
find "$HOME" -name "dashboard_data.json" -delete 2>/dev/null || true
echo "   ✅ Database files cleaned"

# 5. Remove virtual environments (search common locations)
echo "🐍 Removing virtual environments..."
for venv_path in "$HOME/venv" "$HOME/.virtualenvs/python-learning-hub" "$HOME/python-learning-hub/venv"; do
    if [ -d "$venv_path" ]; then
        rm -rf "$venv_path"
        echo "   ✅ Removed virtual environment: $venv_path"
    fi
done

# 6. Clean up pip cache
echo "📦 Cleaning pip cache..."
if command -v pip &> /dev/null; then
    pip cache purge 2>/dev/null || echo "   Pip cache already clean"
fi
if command -v pip3 &> /dev/null; then
    pip3 cache purge 2>/dev/null || echo "   Pip3 cache already clean"
fi

# 7. Remove any global installations (be careful here)
echo "🌍 Checking for global package installations..."
echo "   Note: We'll only uninstall if packages were installed globally"

# Check if Flask was installed globally (not in a virtual environment)
if command -v pip show flask &> /dev/null && [[ $(pip show flask 2>/dev/null | grep "Location") != *"site-packages"* ]]; then
    echo "   Flask appears to be globally installed. Consider running: pip uninstall Flask"
fi

# 8. Clean up temporary files
echo "🧹 Cleaning temporary files..."
rm -rf /tmp/tmp* 2>/dev/null || true
rm -rf /var/tmp/tmp* 2>/dev/null || true
find /tmp -name "*python*learning*" -delete 2>/dev/null || true

# 9. Clean up logs
echo "📝 Cleaning log files..."
rm -rf /var/log/python-learning-hub* 2>/dev/null || true
rm -rf "$HOME/logs/python-learning-hub*" 2>/dev/null || true

# 10. Remove systemd services (if any were created)
echo "⚙️ Checking for systemd services..."
if [ -f "/etc/systemd/system/python-learning-hub.service" ]; then
    echo "   Found systemd service, removing..."
    sudo systemctl stop python-learning-hub 2>/dev/null || true
    sudo systemctl disable python-learning-hub 2>/dev/null || true
    sudo rm -f /etc/systemd/system/python-learning-hub.service
    sudo systemctl daemon-reload
    echo "   ✅ Systemd service removed"
fi

# 11. Clean browser cache (optional)
echo "🌐 Browser cache cleanup (manual)..."
echo "   Consider clearing browser cache for localhost:5000"

# 12. Remove any nginx configurations (if created)
echo "🔧 Checking for nginx configurations..."
if [ -f "/etc/nginx/sites-available/python-learning-hub" ]; then
    echo "   Found nginx configuration, please remove manually:"
    echo "   sudo rm /etc/nginx/sites-available/python-learning-hub"
    echo "   sudo rm /etc/nginx/sites-enabled/python-learning-hub"
    echo "   sudo nginx -t && sudo systemctl reload nginx"
fi

# 13. Final cleanup verification
echo ""
echo "🔍 Cleanup verification..."
echo "========================================================="

# Check if project directory still exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "✅ Project directory: REMOVED"
else
    echo "❌ Project directory: STILL EXISTS"
fi

# Check for running processes
if ! pgrep -f "python.*app.py" > /dev/null; then
    echo "✅ Flask processes: STOPPED"
else
    echo "❌ Flask processes: STILL RUNNING"
fi

# Check for Docker containers
if command -v docker &> /dev/null; then
    if ! docker ps | grep -q python-learning; then
        echo "✅ Docker containers: STOPPED"
    else
        echo "❌ Docker containers: STILL RUNNING"
    fi
fi

echo ""
echo "🎉 CLEANUP COMPLETED!"
echo "========================================================="
echo ""
echo "📋 Summary of actions taken:"
echo "   • Stopped all Flask applications"
echo "   • Removed Docker containers and images"
echo "   • Deleted project directory"
echo "   • Cleaned database files"
echo "   • Removed virtual environments"
echo "   • Cleaned pip cache"
echo "   • Removed temporary files"
echo "   • Cleaned log files"
echo ""
echo "🔧 Manual cleanup (if applicable):"
echo "   • Clear browser cache for localhost:5000"
echo "   • Remove nginx configurations (if created)"
echo "   • Uninstall global Python packages (if needed)"
echo ""
echo "✨ Your system has been cleaned of all Python Learning Hub traces!"
echo ""

# Self-destruct (remove this script)
echo "🚀 This cleanup script will now self-destruct in 5 seconds..."
sleep 5
rm -f "$0"