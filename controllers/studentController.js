const db = require("../models/index");

const Student = db.student;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
  try {
    const student = {
      Roll: req.body.Roll,
      Name: req.body.Name,
      FatherName: req.body.FatherName,
      Address: req.body.Address,
      Marks: req.body.Marks,
    };

    // console.log(Student);
    const newStudent = await Student.create(student);
    res.status(200).json({ status: "success", newStudent });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "failed", err });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const allStudent = await Student.findAll();
    res.status(200).json({ status: "success", allStudent });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const roll = req.params.roll;
    console.log(roll);
    const student = await Student.findAll({
      attributes: ["Name", "Marks"],
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
    const student = await Student.update(req.body, { where: { Roll: roll } });
    res.status(200).json({ status: "success", student });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const roll = req.params.roll;
    const del = await Student.destroy({
      where: { Roll: roll },
    });
    res.status(200).json({ status: "success", del });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    const del = await Student.destroy({ where: {}, truncate: false });
    res.status(200).json({ status: "success", del });
  } catch (err) {
    res.status(404).json({ status: "failed", err });
  }
};
