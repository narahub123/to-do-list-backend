const { Router } = require("express");

const {
  createMonthlyToDo,
  getAllMonthlyToDos,
  getSingleMonthlyToDo,
} = require("../controllers/monthlyToDoController");

const router = Router();

router.get("/", getAllMonthlyToDos);
router.post("/save", createMonthlyToDo);
router.get("/:id", getSingleMonthlyToDo);

module.exports = router;
