const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

router.get("/dashboard", (req, res) => {
  res.status(200).json({ message: "this is a dashboard" });
});

router.get("/user/profile", (req, res) => {
  res.status(200).json({
    name: "john doe",
    age: "30",
    location: "Mumbai",
  });
});

module.exports = router;
