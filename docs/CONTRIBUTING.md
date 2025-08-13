# 🤝 Contributing to Python Learning Hub

Thank you for your interest in contributing to the Python Learning Hub! This document provides guidelines and instructions for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)

## 🤝 Code of Conduct

### Our Pledge
We are committed to making participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Expected Behavior
- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites
- Python 3.11 or higher
- Git
- Code editor (VS Code, PyCharm, etc.)
- Basic knowledge of Flask, HTML, CSS, JavaScript

### First-time Setup
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/python-learning-hub.git
   cd python-learning-hub
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/originalowner/python-learning-hub.git
   ```

## 💻 Development Setup

### Virtual Environment
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

### Pre-commit Hooks
```bash
# Install pre-commit hooks
pre-commit install

# Run hooks manually
pre-commit run --all-files
```

### Running the Application
```bash
# Development mode
python app.py

# Or with Flask CLI
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
```

## 🔧 Making Changes

### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/amazing-new-feature

# Create bug fix branch
git checkout -b fix/issue-123

# Create documentation branch
git checkout -b docs/update-readme
```

### Types of Contributions

#### 🐛 Bug Fixes
- Check existing issues for duplicates
- Create detailed bug reports with:
  - Steps to reproduce
  - Expected vs actual behavior
  - Environment details
  - Screenshots if applicable

#### ✨ New Features
- Discuss major features in issues first
- Follow existing code patterns
- Add comprehensive tests
- Update documentation

#### 📚 Learning Content
- Add new lessons or modules
- Improve existing content
- Fix typos or unclear explanations
- Add interactive exercises

#### 🎨 UI/UX Improvements
- Enhance responsive design
- Improve accessibility
- Add animations or interactions
- Fix visual bugs

## 🧪 Testing

### Running Tests
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_app.py

# Run with verbose output
pytest -v
```

### Writing Tests
```python
# Example test structure
def test_homepage_loads():
    """Test that the homepage loads successfully."""
    response = client.get('/')
    assert response.status_code == 200
    assert b'Python Learning Hub' in response.data

def test_api_run_code():
    """Test code execution API."""
    data = {'code': 'print("Hello, World!")'}
    response = client.post('/api/run-code', json=data)
    assert response.status_code == 200
    assert 'Hello, World!' in response.json['output']
```

### Test Coverage
- Aim for at least 80% test coverage
- Include unit tests and integration tests
- Test both success and error scenarios

## 📝 Submitting Changes

### Pull Request Process

1. **Update your fork**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Rebase your feature branch**:
   ```bash
   git checkout feature/amazing-new-feature
   git rebase main
   ```

3. **Push your changes**:
   ```bash
   git push origin feature/amazing-new-feature
   ```

4. **Create Pull Request** on GitHub with:
   - Clear, descriptive title
   - Detailed description of changes
   - Link to related issues
   - Screenshots for UI changes
   - Checklist of completed items

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tests pass locally
- [ ] New tests added
- [ ] Manual testing completed

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🎨 Style Guidelines

### Python Code Style
- Follow PEP 8
- Use Black for formatting
- Use type hints where appropriate
- Write docstrings for functions and classes

```python
def calculate_progress(completed_lessons: int, total_lessons: int) -> float:
    """
    Calculate the completion percentage for a module.
    
    Args:
        completed_lessons: Number of completed lessons
        total_lessons: Total number of lessons in module
        
    Returns:
        Completion percentage as a float between 0 and 1
        
    Raises:
        ValueError: If total_lessons is zero or negative
    """
    if total_lessons <= 0:
        raise ValueError("Total lessons must be positive")
    
    return completed_lessons / total_lessons
```

### HTML/CSS Guidelines
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes
- Ensure accessibility (alt tags, ARIA labels)
- Test responsive design on multiple devices

```html
<!-- Good: Semantic and accessible -->
<section class="lesson-content">
    <h2 class="lesson-content__title">Variables and Data Types</h2>
    <p class="lesson-content__description">Learn about Python variables...</p>
</section>

<!-- CSS -->
.lesson-content {
    padding: 2rem;
    margin-bottom: 1rem;
}

.lesson-content__title {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
```

### JavaScript Guidelines
- Use ES6+ features
- Write clear, descriptive function names
- Add JSDoc comments for complex functions
- Handle errors gracefully

```javascript
/**
 * Execute Python code and display results
 * @param {string} code - Python code to execute
 * @returns {Promise<Object>} Execution result
 */
async function executeCode(code) {
    try {
        const response = await fetch('/api/run-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Code execution failed:', error);
        throw error;
    }
}
```

## 📚 Documentation Guidelines

### Lesson Content
- Use clear, simple language
- Include practical examples
- Add interactive exercises
- Provide real-world context

### Code Comments
- Explain complex algorithms
- Document security considerations
- Add TODO comments for future improvements

### API Documentation
- Document all endpoints
- Include request/response examples
- Specify error codes and messages

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to docs
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 🎯 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Python Learning Hub! 🎉