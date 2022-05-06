const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentController.create);

router.get("/", studentController.findAll);

router.get("/:roll", studentController.findOne);

router.patch("/update/:roll", studentController.updateStudent);

router.delete("/:roll", studentController.deleteStudent);

router.delete("/", studentController.deleteAll);

module.exports = router;
