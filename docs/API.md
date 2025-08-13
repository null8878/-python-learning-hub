# 🔧 API Documentation

The Python Learning Hub provides several API endpoints for interactive learning functionality.

## 📋 Base Information

- **Base URL**: `http://localhost:5000`
- **Content Type**: `application/json`
- **Authentication**: None required for learning endpoints

## 🎯 Endpoints

### 1. Homepage
```
GET /
```
**Description**: Serves the main learning hub homepage with module overview.

**Response**: HTML page

---

### 2. Module Page
```
GET /module/<module_name>
```
**Description**: Serves individual module learning page.

**Parameters**:
- `module_name` (string): Module identifier (basics, oop, databases, apis, web-scraping, testing, deployment, projects)

**Response**: HTML page with module content

**Example**:
```bash
curl http://localhost:5000/module/basics
```

---

### 3. Execute Code
```
POST /api/run-code
```
**Description**: Executes Python code securely and returns output.

**Request Body**:
```json
{
  "code": "print('Hello, World!')"
}
```

**Response**:
```json
{
  "success": true,
  "output": "Hello, World!\n",
  "error": "",
  "returncode": 0
}
```

**Error Response**:
```json
{
  "success": false,
  "error": "Code execution timed out"
}
```

**Example**:
```bash
curl -X POST http://localhost:5000/api/run-code \
  -H "Content-Type: application/json" \
  -d '{"code": "print(2 + 2)"}'
```

**Security Features**:
- 10-second execution timeout
- Temporary file cleanup
- Process isolation
- Input validation

---

### 4. Save Progress
```
POST /api/progress
```
**Description**: Saves lesson completion progress to database.

**Request Body**:
```json
{
  "module": "basics",
  "lesson": "Variables and Data Types",
  "completed": true,
  "score": 85
}
```

**Response**:
```json
{
  "success": true
}
```

**Example**:
```bash
curl -X POST http://localhost:5000/api/progress \
  -H "Content-Type: application/json" \
  -d '{
    "module": "basics",
    "lesson": "Variables and Data Types",
    "completed": true,
    "score": 95
  }'
```

---

### 5. Get Progress
```
GET /api/progress/<module_name>
```
**Description**: Retrieves completion progress for a specific module.

**Parameters**:
- `module_name` (string): Module identifier

**Response**:
```json
[
  {
    "id": 1,
    "module": "basics",
    "lesson": "Variables and Data Types",
    "completed": true,
    "score": 95,
    "timestamp": "2024-01-15T10:30:00"
  },
  {
    "id": 2,
    "module": "basics",
    "lesson": "Control Structures",
    "completed": false,
    "score": 0,
    "timestamp": "2024-01-15T11:00:00"
  }
]
```

**Example**:
```bash
curl http://localhost:5000/api/progress/basics
```

---

## 🚨 Error Handling

### Common HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created (progress saved) |
| 400 | Bad Request (invalid input) |
| 404 | Not Found (invalid module) |
| 500 | Internal Server Error |
| 408 | Request Timeout (code execution) |

### Error Response Format
```json
{
  "success": false,
  "error": "Detailed error message",
  "code": "ERROR_CODE"
}
```

---

## 🔒 Security Considerations

### Code Execution Security
- **Timeout Protection**: All code execution limited to 10 seconds
- **Process Isolation**: Code runs in separate subprocess
- **File System Protection**: Temporary files auto-deleted
- **Input Validation**: Code length and content validation
- **Resource Limits**: Memory and CPU usage restrictions

### Input Validation
- Maximum code length: 10,000 characters
- SQL injection protection
- XSS prevention
- CSRF protection (if authentication added)

---

## 📊 Rate Limiting

Currently no rate limiting is implemented, but for production deployment consider:
- Code execution: 10 requests per minute per IP
- Progress saves: 60 requests per minute per IP
- General API: 100 requests per minute per IP

---

## 🧪 Testing the API

### Using curl
```bash
# Test code execution
curl -X POST http://localhost:5000/api/run-code \
  -H "Content-Type: application/json" \
  -d '{"code": "for i in range(3): print(f\"Count: {i}\")"}'

# Save progress
curl -X POST http://localhost:5000/api/progress \
  -H "Content-Type: application/json" \
  -d '{
    "module": "basics",
    "lesson": "Test Lesson",
    "completed": true,
    "score": 100
  }'

# Get progress
curl http://localhost:5000/api/progress/basics
```

### Using Python requests
```python
import requests
import json

base_url = "http://localhost:5000"

# Execute code
code_data = {"code": "print('Hello from API!')"}
response = requests.post(f"{base_url}/api/run-code", json=code_data)
print(response.json())

# Save progress
progress_data = {
    "module": "basics",
    "lesson": "API Testing",
    "completed": True,
    "score": 100
}
response = requests.post(f"{base_url}/api/progress", json=progress_data)
print(response.json())

# Get progress
response = requests.get(f"{base_url}/api/progress/basics")
print(response.json())
```

### Using JavaScript fetch
```javascript
// Execute code
const executeCode = async (code) => {
  const response = await fetch('/api/run-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  });
  return await response.json();
};

// Save progress
const saveProgress = async (module, lesson, completed, score) => {
  const response = await fetch('/api/progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ module, lesson, completed, score })
  });
  return await response.json();
};

// Get progress
const getProgress = async (module) => {
  const response = await fetch(`/api/progress/${module}`);
  return await response.json();
};
```

---

## 🔄 Future API Enhancements

Planned features for future versions:
- User authentication and profiles
- Lesson completion certificates
- Social features (sharing progress)
- Code sharing and collaboration
- Advanced analytics
- Webhooks for progress tracking
- GraphQL endpoint for complex queries

For questions or issues with the API, please open an issue on GitHub.