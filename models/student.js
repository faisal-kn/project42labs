const BasicStudent = require("./BasicStudent");

const Student = (sequelize, Sequelize) => {
  const StudentSchema = sequelize.define("student", {
    Roll: {
      type: Sequelize.STRING,
      references: {
        model: "basicStudents",
        key: "Roll",
      },
      allowNull: false,
    },
    FatherName: {
      type: Sequelize.STRING,
    },
    Address: {
      type: Sequelize.STRING,
    },
  });

  return StudentSchema;
};



module.exports = Student;
