const { Router } = require("express");

const { createMonthlyToDo } = require("../controllers/monthlyToDoController");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hi, there..." });
});

router.post("/save", createMonthlyToDo);

module.exports = router;
