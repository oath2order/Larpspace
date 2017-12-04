var orm = require("../config/SQL/orm")

var larpdb = {
  selectAll: function(cb) {
    orm.selectAll("campaigns", function(res) {
      cb(res);
    });
  },
  insertOne: function(tbl, cols, vals, cb) {
    orm.insertOne(tbl, cols, vals, function(res) {
      cb(res);
    });
  },
  selectWhere: function(tbl, cols, opr, vals, cb) {
    orm.selectWhere(tbl, cols, opr, vals, function(res) {
      cb(res);
    });
  }
  //   updateOne: function(condition, cb) {
  //     orm.updateOne("burgers", condition, function(res) {
  //       cb(res);
  //     });
  //   }
};

module.exports = larpdb;
