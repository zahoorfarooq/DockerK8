const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let notes = [{ id: 1, text: "Welcome to DevOps Notes App!" }];

app.use(express.json());
app.get("/", (req, res) => res.send("DevOps Sample App is running!"));
app.get("/notes", (req, res) => res.json(notes));
app.post("/notes", (req, res) => {
  const n = { id: notes.length + 1, text: req.body.text || "" };
  notes.push(n);
  res.status(201).json(n);
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));
