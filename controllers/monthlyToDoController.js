const MonthlyToDoModel = require("../models/MonthlyToDoModel");

const createMonthlyToDo = async (req, res) => {
  const {
    data: { column, subject, start, end, todos },
  } = req.body;

  if (!column || !subject || !start || !end || !Array.isArray(todos)) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  MonthlyToDoModel.create({ data: { column, subject, start, end, todos } })
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
  const { id } = req.params;

  MonthlyToDoModel.findOne({ id })
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

const updateMonthlyToDo = async (req, res) => {
  const {
    id,
    data: { column, subject, start, end, todos },
  } = req.body;

  if (!id) {
    return res.status(400).send("MonthlyToDo Not Found");
  }

  MonthlyToDoModel.findByIdAndUpdate(id, {
    data: {
      column,
      subject,
      start,
      end,
      todos,
    },
  })
    .then((data) => {
      console.log(data);
      res.status(200).send("Update Successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const deleteMonthlyToDo = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    return res.status(404).send("MonthlyToDo Not Found");
  }

  MonthlyToDoModel.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send("MonthlyToDo Not Found");
      }
      console.log(data);
      res.status(200).send("Delete Successfully...");
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
  updateMonthlyToDo,
  deleteMonthlyToDo,
};
