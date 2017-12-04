var express = require("express");
var router = express.Router();
var larpdb = require("../models/larpdb.js");

router.get("/api/getgames/:id", function(req, res) {
  console.log(req.params)
  larpdb.selectWhere(
    "campaigns",
    "user_id",
    "=",
    req.params.id,
    function(data) {
      res.json(data);
    }
  );
});
router.post("/api/newuser", function(req, res) {
  console.log(req.body.id);
  larpdb.insertOne("users", "id", req.body.id, function() {
    res.json(data);
  });
});
router.post("/api/newgame", function(req, res) {

  larpdb.insertOne(
    "campaigns",
    "title, owner, description, starting_cp, user_id",
    req.body.title +
      "', '" +
      req.body.owner +
      "', '" +
      req.body.desc +
      "', '" +
      req.body.cp +
      "', '" +
      req.body.userid,
    function(data) {
      res.json(data);
    }
  );
});

router.post("/api/newskill", function(req, res) {
  console.log(req.body);
  larpdb.insertOne(
    "master_skills_table",
    "skill_name, attribute_cost, skill_text, game_id",
    req.body.name +
      "', '" +
      req.body.attcost +
      "', '" +
      req.body.text +
      "', '" +
      req.body.gameid,
    function(data) {
      res.json(data);
    }
  );
});
// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne(condition, function() {
//     res.redirect("/");
//   });
// });
module.exports = router;
