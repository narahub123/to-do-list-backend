const { Router } = require("express");

const {
  createMonthlyToDo,
  getAllMonthlyToDos,
  getSingleMonthlyToDo,
  updateMonthlyToDo,
} = require("../controllers/monthlyToDoController");

const router = Router();

router.get("/", getAllMonthlyToDos);
router.post("/save", createMonthlyToDo);
router.get("/:id", getSingleMonthlyToDo);
router.patch("/:id", updateMonthlyToDo);

module.exports = router;
