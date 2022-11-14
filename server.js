import express from "express";
const app = express();
const PORT = 8000;

import morgan from "morgan";
import router from "./src/router/taskRouter.js";

app.use(morgan("dev"));
app.use(express.json());

//fakedatatask
let faketasktable = [
  {
    _id: 1,
    task: "cooking",
    hr: 2,
  },
  {
    _id: 2,
    task: "shopping",
    hr: 5,
  },
  {
    _id: 3,
    task: "browsing",
    hr: 9,
  },
];

router.post("/", (req, res) => {
  console.log(req.body);
  faketasktable.push(req.body);
  res.json({
    status: "Success",
    message: "Data Added.",
  });
});

router.get("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "Success",
    message: "Data Received.",
  });
});

router.delete("/:_id?", (req, res) => {
  const { _id } = req.params;

  if (!_id) {
    res.status(400).json({
      status: "Error",
      message: "Invalid ID.",
    });
  }
  console.log(req.params);
  faketasktable = faketasktable.filter((task) => task._id != _id);
  res.json({
    status: "Success",
    message: "Data Deleted.",
  });
});

router.put("/", (req, res) => {
  const _id = req.body._id;
  faketasktable = faketasktable.map((task) => {
    if (task._id === _id) {
      return req.body;
    } else {
      return task;
    }
  });
  res.json({
    status: "Success",
    message: "Data Updated.",
  });
});

import taskRouter from "./src/router/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
