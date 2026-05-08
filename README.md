# 🚀 Capgemini MERN Training — MongoDB · Node.js · Express.js · React

> A hands-on training repository from the **Capgemini Full-Stack Development Program**, covering the complete MERN stack: **MongoDB**, **Node.js**, **Express.js**, and **React**. This repo serves as a day-by-day practice log and reference guide built during live training sessions.

---

## 📌 Description

This repository contains all exercises, examples, and mini-projects developed as part of the Capgemini full-stack training curriculum, focusing on the MERN stack. It is structured by technology and session date, making it easy to trace learning progress and revisit specific concepts. The codebase includes backend APIs, database operations, and frontend React applications.

---

## 📁 Repository Structure

```
Capgemini-MERN/
│
├── MongoDB/
│   └── 05-05-2026/         # MongoDB concepts, queries, CRUD operations
│
├── Node js/
│   └── 06-05-2026/         # Node.js fundamentals, modules, file system, etc.
│
├── Express js/             # Express.js routing, middleware, REST API concepts
│
├── 08-05-2026-React-Assessment/
│   └── mega-sale-page/     # React application for mega sale page
│
├── E-Commerce/             # Full MERN stack e-commerce application
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── models/
│   └── ...
│
├── .gitignore
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

Each folder is self-contained and corresponds to a specific training session or topic. 

- For backend modules (MongoDB, Node.js, Express.js): Navigate to the relevant directory and run the JavaScript files directly with Node.js:
  ```bash
  node filename.js
  ```

- For React applications: Navigate to the project folder, install dependencies, and start the development server:
  ```bash
  cd 08-05-2026-React-Assessment/mega-sale-page
  npm install
  npm run dev
  ```

- For full-stack projects like E-Commerce: Follow the specific README or run the server and client separately.

For Express.js servers and full-stack apps, open your browser or use a tool like **Postman** / **Thunder Client** to test the API endpoints at:

```
http://localhost:3000
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
