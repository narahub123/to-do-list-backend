const { Router } = require("express");

const {
  createMonthlyToDo,
  getAllMonthlyToDos,
} = require("../controllers/monthlyToDoController");

const router = Router();

router.get("/", getAllMonthlyToDos);
router.post("/save", createMonthlyToDo);

module.exports = router;
