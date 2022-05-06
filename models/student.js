const Student = (sequelize, Sequelize) => {
  const StudentSchema = sequelize.define("student", {
    Roll: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Name: {
      type: Sequelize.STRING,
    },
    FatherName: {
      type: Sequelize.STRING,
    },
    Address: {
      type: Sequelize.STRING,
    },
    Marks: {
      type: Sequelize.INTEGER,
    },
  });

  return StudentSchema;
};

module.exports = Student;