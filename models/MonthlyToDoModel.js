const mongoose = require("mongoose");

const monthlyToDoSchema = new mongoose.Schema({
  user: {
    type: String,
    default: "user1",
  },
  data: {
    subject: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    todos: [
      {
        type: String,
      },
    ],
  },
  next: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("MonthlyToDo", monthlyToDoSchema);
