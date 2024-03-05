const MonthlyToDoModel = require("../models/MonthlyToDoModel");

const createMonthlyToDo = async (req, res) => {
  const {
    data: { subject, start, end, todos },
  } = req.body;

  if (!subject || !start || !end || !Array.isArray(todos)) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  MonthlyToDoModel.create({ data: { subject, start, end, todos } })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const getAllMonthlyToDos = async (req, res) => {
  const monthlyToDos = await MonthlyToDoModel.find();

  if (!monthlyToDos) {
    return res.status(404).send("MonthlyToDos Not Found");
  }
  res.send(monthlyToDos);
};

const getSingleMonthlyToDo = async (req, res) => {
  const { _id } = req.params;

  MonthlyToDoModel.findOne({ _id })
    .then((data) => {
      if (!data) {
        return res.status(404).send("MonthlyToDo Not Found");
      }
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  createMonthlyToDo,
  getAllMonthlyToDos,
  getSingleMonthlyToDo,
};
