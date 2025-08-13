const lessons = {
    basics: [
        {
            title: "Python Introduction",
            content: `
                <h2>Welcome to Python!</h2>
                <p>Python is a powerful, easy-to-learn programming language. It's perfect for beginners and professionals alike.</p>
                
                <h3>Why Python?</h3>
                <ul>
                    <li>Simple and readable syntax</li>
                    <li>Versatile - web development, data science, AI, automation</li>
                    <li>Large community and extensive libraries</li>
                    <li>Cross-platform compatibility</li>
                </ul>
                
                <h3>Your First Python Program</h3>
                <p>Let's start with the classic "Hello, World!" program:</p>
                <pre><code class="language-python">print("Hello, World!")</code></pre>
            `,
            code: 'print("Hello, World!")'
        },
        {
            title: "Variables and Data Types",
            content: `
                <h2>Variables and Data Types</h2>
                <p>Variables are containers for storing data values. Python has several built-in data types.</p>
                
                <h3>Basic Data Types</h3>
                <ul>
                    <li><strong>int</strong> - Integer numbers (1, 42, -10)</li>
                    <li><strong>float</strong> - Decimal numbers (3.14, -0.5)</li>
                    <li><strong>str</strong> - Text strings ("Hello", 'Python')</li>
                    <li><strong>bool</strong> - True or False values</li>
                </ul>
                
                <h3>Creating Variables</h3>
                <pre><code class="language-python">name = "Alice"
age = 25
height = 5.6
is_student = True

print(f"Name: {name}, Age: {age}")</code></pre>
            `,
            code: `name = "Alice"
age = 25
height = 5.6
is_student = True

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is student: {is_student}")

# Check data types
print(f"Type of name: {type(name)}")
print(f"Type of age: {type(age)}")
print(f"Type of height: {type(height)}")
print(f"Type of is_student: {type(is_student)}")`
        },
        {
            title: "Control Structures",
            content: `
                <h2>Control Structures</h2>
                <p>Control structures allow you to control the flow of your program execution.</p>
                
                <h3>If Statements</h3>
                <p>Make decisions in your code:</p>
                <pre><code class="language-python">age = 18
if age >= 18:
    print("You can vote!")
else:
    print("Too young to vote")</code></pre>
                
                <h3>For Loops</h3>
                <p>Repeat code for each item in a sequence:</p>
                <pre><code class="language-python">fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")</code></pre>
                
                <h3>While Loops</h3>
                <p>Repeat code while a condition is true:</p>
                <pre><code class="language-python">count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1</code></pre>
            `,
            code: `# If statements
age = 20
if age >= 18:
    print("You can vote!")
elif age >= 16:
    print("You can drive!")
else:
    print("Too young for both")

# For loop
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# While loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1`
        },
        {
            title: "Functions",
            content: `
                <h2>Functions</h2>
                <p>Functions are reusable blocks of code that perform specific tasks.</p>
                
                <h3>Defining Functions</h3>
                <pre><code class="language-python">def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)</code></pre>
                
                <h3>Function Parameters</h3>
                <ul>
                    <li><strong>Required parameters</strong> - Must be provided</li>
                    <li><strong>Default parameters</strong> - Have default values</li>
                    <li><strong>*args</strong> - Variable number of arguments</li>
                    <li><strong>**kwargs</strong> - Variable number of keyword arguments</li>
                </ul>
                
                <h3>Lambda Functions</h3>
                <p>Short, anonymous functions for simple operations:</p>
                <pre><code class="language-python">square = lambda x: x * x
print(square(5))  # Output: 25</code></pre>
            `,
            code: `# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# Function with default parameter
def greet_with_title(name, title="Mr./Ms."):
    return f"Hello, {title} {name}!"

print(greet_with_title("Smith"))
print(greet_with_title("Johnson", "Dr."))

# Function with multiple parameters
def calculate_area(length, width):
    area = length * width
    return area

print(f"Area: {calculate_area(5, 3)}")

# Lambda function
square = lambda x: x * x
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))
print(f"Squared numbers: {squared}")`
        },
        {
            title: "Lists and Dictionaries",
            content: `
                <h2>Lists and Dictionaries</h2>
                <p>Learn about Python's most useful data structures.</p>
                
                <h3>Lists</h3>
                <p>Ordered collections of items:</p>
                <pre><code class="language-python">fruits = ["apple", "banana", "orange"]
fruits.append("grape")
print(fruits[0])  # First item</code></pre>
                
                <h3>List Methods</h3>
                <ul>
                    <li><code>append()</code> - Add item to end</li>
                    <li><code>insert()</code> - Add item at specific position</li>
                    <li><code>remove()</code> - Remove specific item</li>
                    <li><code>pop()</code> - Remove and return item</li>
                </ul>
                
                <h3>Dictionaries</h3>
                <p>Key-value pairs for storing related data:</p>
                <pre><code class="language-python">person = {"name": "Alice", "age": 30}
print(person["name"])  # Access by key</code></pre>
            `,
            code: `# Lists
fruits = ["apple", "banana", "orange"]
print(f"Original list: {fruits}")

# Add items
fruits.append("grape")
fruits.insert(1, "mango")
print(f"After adding: {fruits}")

# Remove items
fruits.remove("banana")
last_fruit = fruits.pop()
print(f"After removing: {fruits}")
print(f"Removed fruit: {last_fruit}")

# List slicing
print(f"First two fruits: {fruits[:2]}")

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "swimming"]
}

print(f"Name: {person['name']}")
print(f"Age: {person['age']}")

# Add new key-value pair
person["job"] = "Engineer"
print(f"Updated person: {person}")

# Loop through dictionary
for key, value in person.items():
    print(f"{key}: {value}")`
        },
        {
            title: "Error Handling",
            content: `
                <h2>Error Handling</h2>
                <p>Learn how to handle errors gracefully in your Python programs.</p>
                
                <h3>Try-Except Blocks</h3>
                <pre><code class="language-python">try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always runs")</code></pre>
                
                <h3>Common Exception Types</h3>
                <ul>
                    <li><code>ValueError</code> - Invalid value for operation</li>
                    <li><code>TypeError</code> - Wrong data type</li>
                    <li><code>KeyError</code> - Dictionary key not found</li>
                    <li><code>IndexError</code> - List index out of range</li>
                    <li><code>FileNotFoundError</code> - File doesn't exist</li>
                </ul>
                
                <h3>Raising Custom Exceptions</h3>
                <pre><code class="language-python">def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b</code></pre>
            `,
            code: `# Basic try-except
try:
    number = int(input("Enter a number (try 'abc'): "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("This always executes")

# Multiple exceptions
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError:
        return "Both arguments must be numbers"

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide("10", 2))

# Custom exception
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return f"Age {age} is valid"

try:
    print(check_age(25))
    print(check_age(-5))
except ValueError as e:
    print(f"Error: {e}")`
        }
    ],
    databases: [
        {
            title: "Introduction to Databases",
            content: `
                <h2>Introduction to Databases</h2>
                <p>Databases are essential for storing and managing data in applications.</p>
                
                <h3>What is a Database?</h3>
                <p>A database is an organized collection of structured information, or data, typically stored electronically.</p>
                
                <h3>Types of Databases</h3>
                <ul>
                    <li><strong>Relational (SQL)</strong> - MySQL, PostgreSQL, SQLite</li>
                    <li><strong>NoSQL</strong> - MongoDB, Redis, Cassandra</li>
                    <li><strong>In-memory</strong> - Redis, Memcached</li>
                </ul>
                
                <h3>Why Use Databases?</h3>
                <ul>
                    <li>Persistent data storage</li>
                    <li>Data integrity and consistency</li>
                    <li>Concurrent access</li>
                    <li>Efficient querying</li>
                </ul>
            `,
            code: `# We'll start with SQLite - a lightweight database perfect for learning
import sqlite3

# Create a connection to a database (creates file if it doesn't exist)
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create a simple table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    )
''')

print("Database and table created successfully!")
conn.close()`
        },
        {
            title: "SQL Basics - CRUD Operations",
            content: `
                <h2>SQL Basics - CRUD Operations</h2>
                <p>CRUD stands for Create, Read, Update, Delete - the four basic operations you can perform on data.</p>
                
                <h3>Create (INSERT)</h3>
                <pre><code class="language-sql">INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');</code></pre>
                
                <h3>Read (SELECT)</h3>
                <pre><code class="language-sql">SELECT * FROM users;
SELECT name, email FROM users WHERE id = 1;</code></pre>
                
                <h3>Update (UPDATE)</h3>
                <pre><code class="language-sql">UPDATE users SET email = 'newemail@example.com' WHERE id = 1;</code></pre>
                
                <h3>Delete (DELETE)</h3>
                <pre><code class="language-sql">DELETE FROM users WHERE id = 1;</code></pre>
            `,
            code: `import sqlite3

# Connect to database
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# CREATE - Insert data
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("Alice Smith", "alice@example.com"))
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("Bob Johnson", "bob@example.com"))

# READ - Select data
cursor.execute("SELECT * FROM users")
users = cursor.fetchall()
print("All users:")
for user in users:
    print(f"ID: {user[0]}, Name: {user[1]}, Email: {user[2]}")

# UPDATE - Modify data
cursor.execute("UPDATE users SET email = ? WHERE name = ?", ("alice.smith@newdomain.com", "Alice Smith"))

# READ again to see the change
cursor.execute("SELECT * FROM users WHERE name = 'Alice Smith'")
updated_user = cursor.fetchone()
print(f"\\nUpdated user: {updated_user}")

# Commit changes and close
conn.commit()
conn.close()
print("\\nDatabase operations completed!")`
        }
    ],
    apis: [
        {
            title: "What are APIs?",
            content: `
                <h2>Introduction to APIs</h2>
                <p>API stands for Application Programming Interface. It's a way for different software applications to communicate with each other.</p>
                
                <h3>Types of APIs</h3>
                <ul>
                    <li><strong>REST APIs</strong> - Most common, uses HTTP methods</li>
                    <li><strong>GraphQL</strong> - Query language for APIs</li>
                    <li><strong>WebSocket</strong> - Real-time communication</li>
                    <li><strong>RPC</strong> - Remote Procedure Calls</li>
                </ul>
                
                <h3>HTTP Methods</h3>
                <ul>
                    <li><strong>GET</strong> - Retrieve data</li>
                    <li><strong>POST</strong> - Create new data</li>
                    <li><strong>PUT</strong> - Update existing data</li>
                    <li><strong>DELETE</strong> - Remove data</li>
                </ul>
            `,
            code: `# Let's start by consuming an API using the requests library
import requests
import json

# Make a GET request to a public API
response = requests.get('https://jsonplaceholder.typicode.com/posts/1')

print(f"Status Code: {response.status_code}")
print(f"Content Type: {response.headers['content-type']}")

# Parse JSON response
data = response.json()
print(f"\\nPost Title: {data['title']}")
print(f"Post Body: {data['body'][:50]}...")

# Example of POST request (creating data)
new_post = {
    'title': 'My New Post',
    'body': 'This is the content of my new post',
    'userId': 1
}

post_response = requests.post(
    'https://jsonplaceholder.typicode.com/posts',
    json=new_post
)

print(f"\\nCreated post with ID: {post_response.json()['id']}")`
        },
        {
            title: "Building REST APIs with Flask",
            content: `
                <h2>Building REST APIs with Flask</h2>
                <p>Learn to create your own REST APIs using Flask.</p>
                
                <h3>Creating API Endpoints</h3>
                <pre><code class="language-python">from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify({'users': ['Alice', 'Bob']})

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    return jsonify({'message': f"Created user {data['name']}"})</code></pre>
                
                <h3>HTTP Status Codes</h3>
                <ul>
                    <li><strong>200</strong> - OK (success)</li>
                    <li><strong>201</strong> - Created</li>
                    <li><strong>400</strong> - Bad Request</li>
                    <li><strong>404</strong> - Not Found</li>
                    <li><strong>500</strong> - Internal Server Error</li>
                </ul>
            `,
            code: `from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory data store
users = [
    {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'},
    {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'}
]

# GET all users
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify({'users': users})

# GET single user
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

# POST new user
@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    new_user = {
        'id': len(users) + 1,
        'name': data['name'],
        'email': data['email']
    }
    users.append(new_user)
    return jsonify(new_user), 201

print("API endpoints created:")
print("GET /api/users - Get all users")
print("GET /api/users/<id> - Get single user")
print("POST /api/users - Create new user")`
        }
    ],
    'web-scraping': [
        {
            title: "Introduction to Web Scraping",
            content: `
                <h2>Web Scraping with Python</h2>
                <p>Learn to extract data from websites using Python.</p>
                
                <h3>What is Web Scraping?</h3>
                <p>Web scraping is the process of automatically extracting data from websites.</p>
                
                <h3>Key Libraries</h3>
                <ul>
                    <li><strong>requests</strong> - Make HTTP requests</li>
                    <li><strong>BeautifulSoup</strong> - Parse HTML content</li>
                    <li><strong>pandas</strong> - Data manipulation and analysis</li>
                    <li><strong>selenium</strong> - Browser automation for dynamic content</li>
                </ul>
                
                <h3>Basic Workflow</h3>
                <ol>
                    <li>Send HTTP request to website</li>
                    <li>Parse HTML response</li>
                    <li>Extract desired data</li>
                    <li>Clean and structure data</li>
                    <li>Save to file or database</li>
                </ol>
            `,
            code: `import requests
import json

# Simulate web scraping with a simple example
print("Web Scraping Demo")
print("=" * 30)

# Example 1: Making HTTP requests
url = "https://httpbin.org/json"
try:
    response = requests.get(url)
    data = response.json()
    print(f"Status Code: {response.status_code}")
    print(f"Response data: {data}")
except Exception as e:
    print(f"Error: {e}")

# Example 2: Simulated HTML parsing
html_content = """
<html>
<head><title>Sample Page</title></head>
<body>
    <h1>News Headlines</h1>
    <div class="article">
        <h2>Python 3.12 Released</h2>
        <p>New features include improved performance...</p>
    </div>
    <div class="article">
        <h2>AI Breakthrough</h2>
        <p>Scientists develop new algorithm...</p>
    </div>
</body>
</html>
"""

# Simulate parsing (normally would use BeautifulSoup)
headlines = ["Python 3.12 Released", "AI Breakthrough"]
print(f"\\nExtracted {len(headlines)} headlines:")
for i, headline in enumerate(headlines, 1):
    print(f"{i}. {headline}")

print("\\nNote: Install beautifulsoup4 for real HTML parsing!")
print("pip install beautifulsoup4")`
        },
        {
            title: "Data Processing with Pandas",
            content: `
                <h2>Data Processing with Pandas</h2>
                <p>Learn to manipulate and analyze data using pandas.</p>
                
                <h3>Creating DataFrames</h3>
                <pre><code class="language-python">import pandas as pd

data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
}
df = pd.DataFrame(data)</code></pre>
                
                <h3>Common Operations</h3>
                <ul>
                    <li><code>df.head()</code> - View first 5 rows</li>
                    <li><code>df.info()</code> - Dataset information</li>
                    <li><code>df.describe()</code> - Statistical summary</li>
                    <li><code>df.groupby()</code> - Group data</li>
                    <li><code>df.merge()</code> - Join DataFrames</li>
                </ul>
            `,
            code: '# Simulate pandas operations (install pandas for real usage)\n' +
'print("Data Processing Demo")\n' +
'print("=" * 30)\n' +
'\n' +
'# Sample data\n' +
'data = [\n' +
'    {"name": "Alice", "age": 25, "city": "NYC", "salary": 70000},\n' +
'    {"name": "Bob", "age": 30, "city": "LA", "salary": 80000},\n' +
'    {"name": "Charlie", "age": 35, "city": "Chicago", "salary": 90000},\n' +
'    {"name": "Diana", "age": 28, "city": "NYC", "salary": 75000},\n' +
'    {"name": "Eve", "age": 32, "city": "LA", "salary": 85000}\n' +
']\n' +
'\n' +
'print("Sample Data:")\n' +
'for person in data:\n' +
'    print(f"{person[\'name\']}: {person[\'age\']} years, {person[\'city\']}, ${person[\'salary\']:,}")\n' +
'\n' +
'# Simulated operations\n' +
'print(f"\\nDataset Info:")\n' +
'print(f"Total records: {len(data)}")\n' +
'print(f"Columns: {list(data[0].keys())}")\n' +
'\n' +
'# Group by city (simulated)\n' +
'cities = {}\n' +
'for person in data:\n' +
'    city = person["city"]\n' +
'    if city not in cities:\n' +
'        cities[city] = []\n' +
'    cities[city].append(person["salary"])\n' +
'\n' +
'print(f"\\nAverage salary by city:")\n' +
'for city, salaries in cities.items():\n' +
'    avg_salary = sum(salaries) / len(salaries)\n' +
'    print(f"{city}: ${avg_salary:,.2f}")\n' +
'\n' +
'print("\\nNote: Install pandas for advanced data operations!")\n' +
'print("pip install pandas")'
        }
    ],
    oop: [
        {
            title: "Classes and Objects",
            content: `
                <h2>Object-Oriented Programming</h2>
                <p>Learn the fundamentals of OOP in Python.</p>
                
                <h3>What is OOP?</h3>
                <p>Object-Oriented Programming is a programming paradigm based on objects and classes.</p>
                
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Class</strong> - Blueprint for creating objects</li>
                    <li><strong>Object</strong> - Instance of a class</li>
                    <li><strong>Attributes</strong> - Data stored in objects</li>
                    <li><strong>Methods</strong> - Functions that belong to objects</li>
                </ul>
                
                <h3>Creating a Class</h3>
                <pre><code class="language-python">class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name} says Woof!"</code></pre>
            `,
            code: `class Dog:
    # Class variable (shared by all instances)
    species = "Canis lupus"
    
    def __init__(self, name, breed, age):
        # Instance variables (unique to each object)
        self.name = name
        self.breed = breed
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def get_info(self):
        return f"{self.name} is a {self.age}-year-old {self.breed}"
    
    def have_birthday(self):
        self.age += 1
        return f"Happy birthday {self.name}! Now {self.age} years old."

# Create objects (instances)
dog1 = Dog("Buddy", "Golden Retriever", 3)
dog2 = Dog("Max", "German Shepherd", 5)

print(f"Dog 1: {dog1.get_info()}")
print(f"Dog 2: {dog2.get_info()}")

print(f"\\n{dog1.bark()}")
print(f"{dog2.bark()}")

print(f"\\n{dog1.have_birthday()}")
print(f"Species: {Dog.species}")`
        },
        {
            title: "Inheritance and Polymorphism",
            content: `
                <h2>Inheritance and Polymorphism</h2>
                <p>Learn advanced OOP concepts.</p>
                
                <h3>Inheritance</h3>
                <p>Create new classes based on existing classes:</p>
                <pre><code class="language-python">class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"</code></pre>
                
                <h3>Polymorphism</h3>
                <p>Same method name, different behaviors in different classes.</p>
                
                <h3>Method Overriding</h3>
                <p>Child classes can override parent methods to provide specific implementations.</p>
            `,
            code: `# Base class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        return "Some generic animal sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

# Derived classes
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed
    
    def speak(self):
        return f"{self.name} says Woof!"
    
    def fetch(self):
        return f"{self.name} is fetching the ball!"

class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Cat")
        self.breed = breed
    
    def speak(self):
        return f"{self.name} says Meow!"
    
    def climb(self):
        return f"{self.name} is climbing a tree!"

# Create instances
dog = Dog("Buddy", "Labrador")
cat = Cat("Whiskers", "Persian")

print(dog.info())
print(cat.info())

print(f"\\n{dog.speak()}")
print(f"{cat.speak()}")

print(f"\\n{dog.fetch()}")
print(f"{cat.climb()}")

# Polymorphism in action
animals = [dog, cat]
print("\\nPolymorphism demo:")
for animal in animals:
    print(animal.speak())`
        }
    ],
    testing: [
        {
            title: "Unit Testing with pytest",
            content: `
                <h2>Testing Your Code</h2>
                <p>Learn to write tests to ensure your code works correctly.</p>
                
                <h3>Why Test?</h3>
                <ul>
                    <li>Catch bugs early</li>
                    <li>Ensure code reliability</li>
                    <li>Enable safe refactoring</li>
                    <li>Document expected behavior</li>
                </ul>
                
                <h3>Types of Tests</h3>
                <ul>
                    <li><strong>Unit tests</strong> - Test individual functions</li>
                    <li><strong>Integration tests</strong> - Test component interactions</li>
                    <li><strong>End-to-end tests</strong> - Test complete workflows</li>
                </ul>
                
                <h3>Basic Test Structure</h3>
                <pre><code class="language-python">def test_function_name():
    # Arrange
    input_data = "test input"
    
    # Act
    result = function_to_test(input_data)
    
    # Assert
    assert result == expected_output</code></pre>
            `,
            code: `# Simple functions to test
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def is_even(n):
    return n % 2 == 0

# Test functions (normally in separate test file)
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
    print("✓ add() tests passed")

def test_divide():
    assert divide(10, 2) == 5
    assert divide(7, 2) == 3.5
    
    # Test exception
    try:
        divide(10, 0)
        assert False, "Should have raised ValueError"
    except ValueError:
        pass  # Expected
    print("✓ divide() tests passed")

def test_is_even():
    assert is_even(2) == True
    assert is_even(3) == False
    assert is_even(0) == True
    assert is_even(-2) == True
    print("✓ is_even() tests passed")

# Run tests
print("Running tests...")
test_add()
test_divide()
test_is_even()
print("\\nAll tests passed! 🎉")`
        }
    ],
    deployment: [
        {
            title: "Docker Basics",
            content: `
                <h2>Containerization with Docker</h2>
                <p>Learn to package your applications with Docker.</p>
                
                <h3>What is Docker?</h3>
                <p>Docker packages applications and their dependencies into containers.</p>
                
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Image</strong> - Blueprint for containers</li>
                    <li><strong>Container</strong> - Running instance of an image</li>
                    <li><strong>Dockerfile</strong> - Instructions to build an image</li>
                    <li><strong>Registry</strong> - Storage for Docker images</li>
                </ul>
                
                <h3>Basic Dockerfile</h3>
                <pre><code class="language-dockerfile">FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]</code></pre>
            `,
            code: `# Create a simple Dockerfile content
dockerfile_content = """FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first (for better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the application
CMD ["flask", "run"]
"""

print("Dockerfile content:")
print(dockerfile_content)

print("\\nDocker commands to build and run:")
print("1. Build image: docker build -t python-learning-app .")
print("2. Run container: docker run -p 5000:5000 python-learning-app")
print("3. List containers: docker ps")
print("4. Stop container: docker stop <container_id>")

# Docker Compose example
compose_content = """version: '3.8'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=development
    volumes:
      - .:/app
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=learning_app
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    ports:
      - "5432:5432"
"""

print("\\nDocker Compose (docker-compose.yml):")
print(compose_content)`
        }
    ],
    projects: [
        {
            title: "Project 1: Todo API",
            content: `
                <h2>Build a Complete Todo API</h2>
                <p>Create a full-featured REST API for managing todos.</p>
                
                <h3>Features to Implement</h3>
                <ul>
                    <li>Create, read, update, delete todos</li>
                    <li>SQLite database integration</li>
                    <li>User authentication</li>
                    <li>Data validation</li>
                    <li>Error handling</li>
                </ul>
                
                <h3>API Endpoints</h3>
                <ul>
                    <li><code>GET /todos</code> - Get all todos</li>
                    <li><code>POST /todos</code> - Create new todo</li>
                    <li><code>GET /todos/{id}</code> - Get specific todo</li>
                    <li><code>PUT /todos/{id}</code> - Update todo</li>
                    <li><code>DELETE /todos/{id}</code> - Delete todo</li>
                </ul>
            `,
            code: `from flask import Flask, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Initialize database
def init_db():
    conn = sqlite3.connect('todos.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# GET all todos
@app.route('/api/todos', methods=['GET'])
def get_todos():
    conn = sqlite3.connect('todos.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM todos ORDER BY created_at DESC')
    todos = cursor.fetchall()
    conn.close()
    
    todo_list = []
    for todo in todos:
        todo_list.append({
            'id': todo[0],
            'title': todo[1],
            'description': todo[2],
            'completed': bool(todo[3]),
            'created_at': todo[4],
            'updated_at': todo[5]
        })
    
    return jsonify({'todos': todo_list})

# POST new todo
@app.route('/api/todos', methods=['POST'])
def create_todo():
    data = request.json
    
    if not data or 'title' not in data:
        return jsonify({'error': 'Title is required'}), 400
    
    conn = sqlite3.connect('todos.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO todos (title, description) VALUES (?, ?)
    ''', (data['title'], data.get('description', '')))
    
    todo_id = cursor.lastrowid
    conn.commit()
    conn.close()
    
    return jsonify({'id': todo_id, 'message': 'Todo created successfully'}), 201

print("Todo API endpoints created!")
print("Run with: flask run")
print("Test with: curl -X GET http://localhost:5000/api/todos")`
        },
        {
            title: "Project 2: Web Scraper Dashboard",
            content: `
                <h2>Build a Web Scraping Dashboard</h2>
                <p>Create a dashboard that scrapes and displays data from multiple sources.</p>
                
                <h3>Features</h3>
                <ul>
                    <li>Scrape news headlines</li>
                    <li>Get weather data</li>
                    <li>Track stock prices</li>
                    <li>Store data in database</li>
                    <li>Display in web dashboard</li>
                </ul>
                
                <h3>Technologies</h3>
                <ul>
                    <li>BeautifulSoup for scraping</li>
                    <li>requests for HTTP calls</li>
                    <li>pandas for data processing</li>
                    <li>Flask for web interface</li>
                    <li>Charts.js for visualizations</li>
                </ul>
            `,
            code: `import requests
import json
from datetime import datetime

class DataScraper:
    def __init__(self):
        self.data = {}
    
    def scrape_news(self):
        """Scrape latest news headlines"""
        try:
            # Simulate news data (in real app, would scrape actual websites)
            news_data = [
                {"title": "Python 3.12 Released", "source": "Tech News"},
                {"title": "AI Breakthrough in Healthcare", "source": "Science Daily"},
                {"title": "New Web Framework Launched", "source": "Dev News"}
            ]
            
            self.data['news'] = news_data
            print(f"Scraped {len(news_data)} news articles")
            
        except Exception as e:
            print(f"Error scraping news: {e}")
    
    def get_weather_data(self):
        """Get weather information"""
        # Simulate weather data
        weather_data = {
            "temperature": 72,
            "condition": "Sunny",
            "humidity": 45,
            "wind_speed": 8
        }
        
        self.data['weather'] = weather_data
        print("Weather data retrieved")
    
    def process_data(self):
        """Process and clean scraped data"""
        processed = {
            "timestamp": datetime.now().isoformat(),
            "summary": {
                "news_count": len(self.data.get('news', [])),
                "temperature": self.data.get('weather', {}).get('temperature'),
                "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
        }
        
        return processed
    
    def save_to_json(self, filename):
        """Save data to JSON file"""
        with open(filename, 'w') as f:
            json.dump(self.data, f, indent=2)
        print(f"Data saved to {filename}")

# Run the scraper
scraper = DataScraper()
scraper.scrape_news()
scraper.get_weather_data()

processed = scraper.process_data()
print("\\nProcessed data:")
print(json.dumps(processed, indent=2))

print("\\nScraper completed successfully!")
print("Note: Install beautifulsoup4 and pandas for real scraping:")
print("pip install beautifulsoup4 pandas")`
        }
    ]
};

let currentModule = MODULE_NAME;
let currentLessonIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    loadLessons();
    setupEventListeners();
});

function loadLessons() {
    const lessonList = document.getElementById('lesson-list');
    const moduleLessons = lessons[currentModule] || [];
    
    lessonList.innerHTML = '';
    moduleLessons.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.textContent = lesson.title;
        li.onclick = () => showLesson(index);
        if (index === 0) li.classList.add('active');
        lessonList.appendChild(li);
    });
    
    if (moduleLessons.length > 0) {
        showLesson(0);
    } else {
        // Show a helpful message if no lessons found
        document.getElementById('lesson-display').innerHTML = `
            <h2>Module: ${currentModule}</h2>
            <p>No lessons available for this module yet. Check back soon!</p>
            <p>Available modules: ${Object.keys(lessons).join(', ')}</p>
        `;
    }
}

function showLesson(index) {
    const moduleLessons = lessons[currentModule] || [];
    if (index < 0 || index >= moduleLessons.length) return;
    
    currentLessonIndex = index;
    const lesson = moduleLessons[index];
    
    // Update lesson content
    document.getElementById('lesson-display').innerHTML = lesson.content;
    
    // Update active lesson in sidebar
    document.querySelectorAll('#lesson-list li').forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
    
    // Show code editor if lesson has code
    const codeSection = document.querySelector('.code-editor-section');
    if (lesson.code) {
        codeSection.style.display = 'block';
        document.getElementById('code-input').value = lesson.code;
    } else {
        codeSection.style.display = 'none';
    }
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Highlight code blocks
    Prism.highlightAll();
}

function updateNavigationButtons() {
    const moduleLessons = lessons[currentModule] || [];
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    const completeBtn = document.getElementById('mark-complete');
    
    prevBtn.style.display = currentLessonIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentLessonIndex < moduleLessons.length - 1 ? 'block' : 'none';
    completeBtn.style.display = 'block';
}

function setupEventListeners() {
    document.getElementById('run-code').onclick = runCode;
    document.getElementById('prev-lesson').onclick = () => showLesson(currentLessonIndex - 1);
    document.getElementById('next-lesson').onclick = () => showLesson(currentLessonIndex + 1);
    document.getElementById('mark-complete').onclick = markLessonComplete;
}

async function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('output-display');
    
    output.textContent = 'Running...';
    
    try {
        const response = await fetch('/api/run-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code })
        });
        
        const result = await response.json();
        
        if (result.success) {
            if (result.error) {
                output.textContent = `Error:\n${result.error}`;
                output.style.borderLeft = '4px solid #dc3545';
            } else {
                output.textContent = result.output || 'Code executed successfully (no output)';
                output.style.borderLeft = '4px solid #28a745';
            }
        } else {
            output.textContent = `Error: ${result.error}`;
            output.style.borderLeft = '4px solid #dc3545';
        }
    } catch (error) {
        output.textContent = `Network error: ${error.message}`;
        output.style.borderLeft = '4px solid #dc3545';
    }
}

async function markLessonComplete() {
    const moduleLessons = lessons[currentModule] || [];
    const lessonTitle = moduleLessons[currentLessonIndex]?.title;
    
    try {
        await fetch('/api/progress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                module: currentModule,
                lesson: lessonTitle,
                completed: true
            })
        });
        
        alert('Lesson marked as complete!');
        
        // Move to next lesson if available
        if (currentLessonIndex < moduleLessons.length - 1) {
            showLesson(currentLessonIndex + 1);
        }
    } catch (error) {
        alert('Error saving progress');
    }
}