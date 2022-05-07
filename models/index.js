const dbConfig = require("../config/config.js");
const Student = require("./student.js");
const BasicStudent = require("./BasicStudent.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const Authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
Authenticate();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = Student(sequelize, Sequelize);
db.basicStudent = BasicStudent(sequelize, Sequelize);
db.basicStudent.hasOne(db.student, { foreignKey: "Roll" });
module.exports = db;
