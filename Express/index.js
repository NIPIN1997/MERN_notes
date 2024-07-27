// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log(req);
//     res.send('Welcome to home page');
// });

// app.listen(3000, () => {
//     console.log("Server started")
// })

const express = require("express");
const app = express();
const { connectDb } = require("./db/connectDb");
const UserModel = require("./user/user.model");

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});
app.patch("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});
app.post("/user/signup", async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const newUser = new UserModel({ name, password, email });
    await newUser.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message, msg: "Server error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({ gender: "male" });
    res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message, msg: "Server error" });
  }
});

connectDb().then(() => {
  app.listen(3000, () => {
    console.log("Server started http://localhost:3000/");
  });
});
