let students = require("../data/students");

// GET all students
exports.getAllStudents = (req, res) => {
  res.status(200).json(students);
};

// GET student by ID
exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.status(200).json(student);
};

// POST add student
exports.addStudent = (req, res) => {
  const newStudent = req.body;
  newStudent.id = students.length + 1;
  students.push(newStudent);
  res.status(201).json(newStudent);
};

// PUT update student
exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index === -1) return res.status(404).json({ message: "Student not found" });
  students[index] = { ...students[index], ...req.body };
  res.status(200).json(students[index]);
};

// DELETE student
exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.status(200).json({ message: "Student deleted successfully" });
};
