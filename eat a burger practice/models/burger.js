module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return burger;
};





// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

// var burger = sequelize.define("burger", {
//   name: Sequelize.STRING,
//   devoured: Sequelize.BOOLEAN,
// })
    
// burger.sync();
// //  export code  //
// module.exports = burger;