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
  console.log(id);
  MonthlyToDoModel.findOne({ _id: id })
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
  const { id } = req.params;
  // console.log(id);
  if (!id) {
    return res.status(400).send("MonthlyToDo Not Found");
  }
  const { column, subject, start, end, todos, next } = req.body;
  // console.log(column, subject, start, end, todos);
  if (!column || !subject || !start || !end || !Array.isArray(todos)) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  const updatedData = {
    data: {
      column,
      subject,
      start,
      end,
      todos,
    },
    next,
  };

  MonthlyToDoModel.findByIdAndUpdate(id, updatedData, { new: true })
    .then((data) => {
      console.log(data);
      if (!data) {
        return data.status(404).send("MonthlyToDo not found");
      }
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
