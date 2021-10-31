const route = require("express").Router();
let userInfo = require("../Model/model");

route.get("/getUser", (req, res) => {
  userInfo
    .find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

route.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userInfo
    .findById({ _id: id })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

route.post("/createUser", (req, res) => {
  const user = new userInfo({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => {
      console.log(data);
      res.send(true);
    })
    .catch((err) => {
      res.send(err);
    });
});

route.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userInfo
    .findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.send(true);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

route.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const updatedUser = new userInfo(updatedData);
  userInfo
    .findOneAndUpdate({ _id: id }, updatedUser)
    .then((result) => {
      if (result) {
        res.send(true);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;
