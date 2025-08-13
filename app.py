from flask import Flask, render_template, request, jsonify
import sqlite3
import json
import subprocess
import tempfile
import os

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('learning_progress.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            module TEXT NOT NULL,
            lesson TEXT NOT NULL,
            completed BOOLEAN DEFAULT FALSE,
            score INTEGER DEFAULT 0,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/module/<module_name>')
def module(module_name):
    return render_template('module.html', module=module_name)

@app.route('/api/run-code', methods=['POST'])
def run_code():
    try:
        code = request.json.get('code', '')
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as f:
            f.write(code)
            temp_file = f.name
        
        result = subprocess.run(
            ['python3', temp_file],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        os.unlink(temp_file)
        
        return jsonify({
            'success': True,
            'output': result.stdout,
            'error': result.stderr,
            'returncode': result.returncode
        })
    
    except subprocess.TimeoutExpired:
        return jsonify({
            'success': False,
            'error': 'Code execution timed out'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

@app.route('/api/progress', methods=['POST'])
def save_progress():
    data = request.json
    conn = sqlite3.connect('learning_progress.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT OR REPLACE INTO progress (module, lesson, completed, score)
        VALUES (?, ?, ?, ?)
    ''', (data['module'], data['lesson'], data['completed'], data.get('score', 0)))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

@app.route('/api/progress/<module_name>')
def get_progress(module_name):
    conn = sqlite3.connect('learning_progress.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM progress WHERE module = ?', (module_name,))
    rows = cursor.fetchall()
    conn.close()
    
    progress = []
    for row in rows:
        progress.append({
            'id': row[0],
            'module': row[1],
            'lesson': row[2],
            'completed': bool(row[3]),
            'score': row[4],
            'timestamp': row[5]
        })
    
    return jsonify(progress)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)