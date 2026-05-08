# 🚀 Capgemini Backend Training — MongoDB · Node.js · Express.js

> A hands-on training repository from the **Capgemini Backend Development Program**, covering core backend technologies: **MongoDB**, **Node.js**, and **Express.js**. This repo serves as a day-by-day practice log and reference guide built during live training sessions.

---

## 📌 Description

This repository contains all exercises, examples, and mini-projects developed as part of the Capgemini backend training curriculum. It is structured by technology and session date, making it easy to trace learning progress and revisit specific concepts. The codebase is primarily written in **JavaScript** with some **HTML** for frontend interaction demos.

---

## 📁 Repository Structure

```
Capgemini-Backend-with-MongoDB-NodeJs-ExpressJS/
│
├── MongoDB/
│   └── 05-05-2026/         # MongoDB concepts, queries, CRUD operations
│
├── Node js/
│   └── 06-05-2026/         # Node.js fundamentals, modules, file system, etc.
│
├── Express js/             # Express.js routing, middleware, REST API concepts
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime for server-side development |
| **Express.js** | Web framework for building REST APIs and handling HTTP requests |
| **MongoDB** | NoSQL database for storing and querying documents |
| **JavaScript** | Primary programming language (93.9%) |
| **HTML** | Basic frontend templates for testing APIs (6.1%) |

---

## 📚 Topics Covered

### 🍃 MongoDB
- Installation & MongoDB Shell basics
- CRUD Operations — `insertOne`, `find`, `updateOne`, `deleteOne`
- Query Operators — `$gt`, `$lt`, `$in`, `$and`, `$or`
- Aggregation Pipeline
- Indexing & Data Modeling

### 🟩 Node.js
- Node.js architecture & Event Loop
- Built-in modules — `fs`, `path`, `os`, `http`
- CommonJS `require` / `module.exports`
- Asynchronous programming — callbacks, Promises, `async/await`
- NPM & package management

### ⚡ Express.js
- Setting up an Express server
- Routing — GET, POST, PUT, DELETE
- Middleware — custom, built-in, third-party
- Request & Response handling
- Building RESTful APIs
- Error handling

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/cser-naivedya-raj/Capgemini-Backend-with-MongoDB-NodeJs-ExpressJS.git

# 2. Navigate into the project folder
cd Capgemini-Backend-with-MongoDB-NodeJs-ExpressJS

# 3. Navigate to a specific module (e.g., Express js)
cd "Express js"

# 4. Install dependencies (if a package.json exists in that folder)
npm install

# 5. Run the server
node index.js
# or
node server.js
```

### Running MongoDB Locally

```bash
# Start the MongoDB service
mongod

# Open the MongoDB shell
mongosh
```

---

## 🧪 Usage

Each folder is self-contained and corresponds to a specific training session or topic. Navigate to the relevant directory and run the JavaScript files directly with Node.js:

```bash
node filename.js
```

For Express.js servers, open your browser or use a tool like **Postman** / **Thunder Client** to test the API endpoints at:

```
http://localhost:3000
```

---

## 👨‍💻 Author

**Naivedya Raj**
- GitHub: [@cser-naivedya-raj](https://github.com/cser-naivedya-raj)

---

## 🏢 Training Context

This repository is part of the **Capgemini** internal backend development training program. Content is organized by date and technology to reflect real-time learning sessions.

---

## 📄 License

This project is intended for **educational and training purposes** only. Feel free to fork and use for learning.

---

> ⭐ If you found this helpful, consider giving the repo a star!
