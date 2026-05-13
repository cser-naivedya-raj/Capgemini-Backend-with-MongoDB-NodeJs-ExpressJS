# 🚀 Capgemini MERN Training — MongoDB · Node.js · Express.js · React

> A hands-on training repository from the **Capgemini Full-Stack Development Program**, covering the complete MERN stack: **MongoDB**, **Node.js**, **Express.js**, and **React**. This repo serves as a day-by-day practice log and reference guide built during live training sessions.

---

## 📌 Description

This repository contains all exercises, examples, and mini-projects developed as part of the Capgemini full-stack training curriculum, focusing on the MERN stack. It is structured by technology and session date (starting from May 5, 2026), making it easy to trace learning progress and revisit specific concepts. 

The codebase includes:
- **MongoDB fundamentals** — CRUD operations, queries, and data modeling
- **Node.js** — Core modules, event loop, asynchronous programming
- **Express.js** — REST APIs, routing, middleware, and authentication
- **React** — Component-based UI development with Vite
- **Full-stack projects** — Complete E-Commerce application with database integration and Socket.io support
- **Class & Home Assignments** — Hands-on exercises with progressive complexity

---

## 📁 Repository Structure

```
Capgemini MERN/
│
├── MongoDB/
│   └── 05-05-2026/
│       ├── Class_Assignment_and_notes_05_05_2026.js
│       └── Home_Assignment_05_05_2026.md
│
├── Node js/
│   └── 06-05-2026/
│       ├── Class Assignment/
│       │   ├── EventEmitter.js
│       │   ├── EventLoop.js
│       │   ├── fsModule/
│       │   └── Http routings/
│       └── Home Assignment/
│
├── Express js/
│   ├── 06-05-2026 - express server creation/
│   │   ├── package.json
│   │   └── server.js
│   ├── 07-05-2026/
│   │   ├── Class Assignment/
│   │   │   ├── Integration with MongoDb/
│   │   │   └── Routings/
│   │   └── Home Assignment/
│   ├── 08-05-2026/
│   │   ├── Class Assignments/
│   │   └── Home Assignments/
│   ├── 11-05-2026/
│   │   ├── Class Assignment/
│   │   │   ├── E-Commerce/
│   │   │   └── Socket.io/
│   │   └── Home Assignment/
│   │       └── E-Commerce/
│   ├── 12-05-2026/
│   │   └── Class Assignment/
│   │       └── E-Commerce/
│   └── E-Commerce/          # Full MERN stack e-commerce app
│       ├── app.js
│       ├── server.js
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── utils/
│
├── 08-05-2026-React-Assessment/
│   └── mega-sale-page/       # React Vite application
│       ├── package.json
│       ├── vite.config.js
│       ├── index.html
│       ├── public/
│       └── src/
│           ├── components/
│           ├── assets/
│           ├── App.jsx
│           └── main.jsx
│
├── E-Commerce/
│   └── routes/
│       └── authRoutes.js
│
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **MongoDB** | NoSQL database for storing and querying documents |
| **Node.js** | JavaScript runtime for server-side development |
| **Express.js** | Web framework for building REST APIs and handling HTTP requests |
| **React** | Frontend library for building user interfaces |
| **JavaScript** | Primary programming language |
| **HTML/CSS** | Markup and styling for frontend components |

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

### ⚛️ React
- Component-based architecture
- JSX syntax and rendering
- State management with hooks (useState, useEffect)
- Props and component communication
- Building interactive UIs
- Vite for development and building

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
cd "Capgemini MERN"

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

Each folder is organized by date and technology, with class and home assignments clearly separated.

### MongoDB Sessions
```bash
cd MongoDB/05-05-2026
node Class_Assignment_and_notes_05_05_2026.js
```

### Node.js Sessions
```bash
cd "Node js/06-05-2026/Class Assignment"
node EventEmitter.js
# or explore other modules like EventLoop.js, fsModule, Http routings
```

### Express.js Sessions
Navigate to the specific date folder and run the server:
```bash
cd "Express js/11-05-2026/Class Assignment/E-Commerce"
npm install
node server.js
```

### React Application (Mega Sale Page)
```bash
cd "08-05-2026-React-Assessment/mega-sale-page"
npm install
npm run dev
```

The development server will start at `http://localhost:5173` (Vite default)

### E-Commerce Full-Stack Application
```bash
cd "Express js/E-Commerce"
npm install
node server.js
```

Then open your browser or use **Postman** / **Thunder Client** to test API endpoints at:
```
http://localhost:3000
```

For real-time features (Socket.io):
```bash
cd "Express js/11-05-2026/Class Assignment/Socket.io"
npm install
node server.js
```

---

## 👨‍💻 Author

**Naivedya Raj**
- GitHub: [@cser-naivedya-raj](https://github.com/cser-naivedya-raj)

---

## 🏢 Training Context

This repository is part of the **Capgemini** internal full-stack development training program. Content is organized by date and technology to reflect real-time learning sessions.

---

## 📄 License

This project is intended for **educational and training purposes** only. Feel free to fork and use for learning.

---

> ⭐ If you found this helpful, consider giving the repo a star!
