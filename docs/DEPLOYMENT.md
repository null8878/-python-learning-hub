# 🚀 Deployment Guide

This guide covers various deployment options for the Python Learning Hub.

## 📋 Prerequisites

- Docker installed
- Git for version control
- Domain name (for production)
- SSL certificate (for HTTPS)

## 🐳 Docker Deployment

### Local Development
```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f web

# Stop services
docker-compose down
```

### Production Docker
```bash
# Build production image
docker build -t python-learning-hub:latest .

# Run production container
docker run -d \
  --name python-learning-hub \
  -p 80:5000 \
  --restart unless-stopped \
  python-learning-hub:latest
```

## ☁️ Cloud Deployment

### Heroku
```bash
# Install Heroku CLI
# Create Procfile
echo "web: python app.py" > Procfile

# Deploy
heroku create your-app-name
git push heroku main
```

### DigitalOcean App Platform
1. Connect your GitHub repository
2. Select Python environment
3. Set build command: `pip install -r requirements.txt`
4. Set run command: `python app.py`

### AWS EC2
```bash
# On EC2 instance
sudo apt update
sudo apt install python3 python3-pip nginx

# Clone and setup
git clone https://github.com/yourusername/python-learning-hub.git
cd python-learning-hub
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Setup systemd service
sudo cp deployment/python-learning-hub.service /etc/systemd/system/
sudo systemctl enable python-learning-hub
sudo systemctl start python-learning-hub
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static {
        alias /path/to/python-learning-hub/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔒 Security Considerations

### Environment Variables
```bash
# Create .env file
FLASK_ENV=production
SECRET_KEY=your-secret-key-here
DATABASE_URL=postgresql://user:password@localhost/dbname
```

### SSL/TLS Setup
```bash
# Using Let's Encrypt
sudo certbot --nginx -d your-domain.com
```

## 📊 Monitoring & Logging

### Application Monitoring
```python
# Add to app.py
import logging
from logging.handlers import RotatingFileHandler

if not app.debug:
    file_handler = RotatingFileHandler('logs/app.log', maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    ))
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.INFO)
```

### Health Checks
```bash
# Basic health check endpoint
curl -f http://localhost:5000/health || exit 1
```

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.11
    - name: Install dependencies
      run: pip install -r requirements.txt
    - name: Run tests
      run: pytest
    - name: Deploy to server
      run: |
        # Add deployment commands here
```

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
sudo lsof -i :5000
sudo kill -9 <PID>
```

#### Permission Denied
```bash
sudo chown -R $USER:$USER /path/to/python-learning-hub
chmod +x app.py
```

#### Database Connection Issues
```bash
# Check SQLite file permissions
ls -la *.db
chmod 664 *.db
```

### Performance Optimization

#### Using Gunicorn
```bash
pip install gunicorn
gunicorn --bind 0.0.0.0:5000 --workers 4 app:app
```

#### Caching with Redis
```python
# Add to requirements.txt
redis==4.6.0
flask-caching==2.1.0
```

## 📈 Scaling

### Load Balancing
```nginx
upstream app_servers {
    server 127.0.0.1:5000;
    server 127.0.0.1:5001;
    server 127.0.0.1:5002;
}

server {
    location / {
        proxy_pass http://app_servers;
    }
}
```

### Database Scaling
- Use PostgreSQL for production
- Implement connection pooling
- Consider read replicas for scaling reads

For more deployment options and advanced configurations, refer to the Flask deployment documentation.