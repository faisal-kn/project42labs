const db = require("../models/index");

const Student = db.student;
const BasicStudent = db.basicStudent;

const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
  try {
    const basicStudent = {
      Roll: req.body.Roll,
      Name: req.body.Name,
      Marks: req.body.Marks,
    };
    const student = {
      Roll: req.body.Roll,
      FatherName: req.body.FatherName,
      Address: req.body.Address,
    };
    // console.log(Student);
    const newStudent = await Student.create(student);
    const newBasicStudent = await BasicStudent.create(basicStudent);
    res.status(200).json({ status: "success", newStudent, newBasicStudent });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "failed", err });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const allStudent = await BasicStudent.findAll({
      include: [
        {
          model: Student,
        },
      ],
    });
    res.status(200).json({ status: "success", allStudent });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "failed", err });
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const roll = req.params.roll;
    console.log(roll);
    const student = await BasicStudent.findAll({
      where: { Roll: roll },
    });
    res.status(200).json({ status: "success", student });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const roll = req.params.roll;
    const student = await BasicStudent.update(req.body, {
      where: { Roll: roll },
    });
    res.status(200).json({ status: "success", student });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const roll = req.params.roll;
    const del = await BasicStudent.destroy({
      where: { Roll: roll },
    });
    const delStudent = await Student.destroy({
      where: { Roll: roll },
    });
    res.status(200).json({ status: "success", del, delStudent });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    const delBasic = await BasicStudent.destroy({ where: {}, truncate: false });
    const del = await Student.destroy({ where: {}, truncate: false });
    res.status(200).json({ status: "success", del, delBasic });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};
