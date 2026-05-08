const express = require("express");
const router = express.Router();


router.get("/users/:id", (req, res) => {
  res.send(`GET user ${req.params.id}`);
});

router.post("/users", (req, res) => {
  res.send(`POST - New user created`);
});

router.put("/users/:id", (req, res) => {
  res.send(`PUT user ${req.params.id}`);
});

router.patch("/users/:id", (req, res) => {
  res.send(`PATCH user ${req.params.id}`);
});

router.delete("/users/:id", (req, res) => {
  res.send(`DELETE user ${req.params.id}`);
});


router.use((req, res) => {

  const method = req.method;

  // Step 1: Check each allowed method using individual if conditions
  // Har allowed method ko alag-alag if condition se check kar rahe hain

  if (method === "GET") {
    return res.status(404).json({
      status: 404,
      error: "Page Not Found",
      message: `The route GET ${req.originalUrl} does not exist.`,
    });
  }

  if (method === "POST") {
    return res.status(404).json({
      status: 404,
      error: "Page Not Found",
      message: `The route POST ${req.originalUrl} does not exist.`,
    });
  }

  if (method === "PUT") {
    return res.status(404).json({
      status: 404,
      error: "Page Not Found",
      message: `The route PUT ${req.originalUrl} does not exist.`,
    });
  }

  if (method === "PATCH") {
    return res.status(404).json({
      status: 404,
      error: "Page Not Found",
      message: `The route PATCH ${req.originalUrl} does not exist.`,
    });
  }

  if (method === "DELETE") {
    return res.status(404).json({
      status: 404,
      error: "Page Not Found",
      message: `The route DELETE ${req.originalUrl} does not exist.`,
    });
  }

  // Step 2: If method is NOT any of the above (e.g. HEAD, OPTIONS, CONNECT etc.)
  // Agar method allowed nahi hai (jaise HEAD, OPTIONS) — 405 return karo

  return res.status(405).json({
    status: 405,
    error: "Method Not Allowed",
    message: `The HTTP method '${method}' is not supported by this API.`,
    allowedMethods: "GET, POST, PUT, PATCH, DELETE",
  });

});

module.exports = router;