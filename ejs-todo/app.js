//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
items = ["eat", "sleep"];
workItems = [];
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newList: items });
});

app.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.list === "Work") {
    workItems.push(req.body.newItem);
    res.redirect("/work");
  }
  items.push(req.body.newItem);
  res.redirect("/");
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work", newList: workItems });
});

app.listen(3000, () => {
  console.log("server on");
});
