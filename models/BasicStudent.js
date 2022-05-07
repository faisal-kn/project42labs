const BasicStudent = (sequelize, Sequelize) => {
  const basicStudentSchema = sequelize.define("basicStudent", {
    Roll: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: Sequelize.STRING,
    },
    Marks: {
      type: Sequelize.INTEGER,
    },
  });

  return basicStudentSchema;
};

module.exports = BasicStudent;
