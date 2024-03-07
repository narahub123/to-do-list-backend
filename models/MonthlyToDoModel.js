const mongoose = require("mongoose");

const monthlyToDoSchema = new mongoose.Schema({
  user: {
    type: String,
    default: "user1",
  },
  data: {
    column: {
      type: Number,
      required: true,
    },
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
        task: {
          type: String,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("MonthlyToDo", monthlyToDoSchema);
