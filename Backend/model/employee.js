const mongoose = require('mongoose');
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Salary: Number
})
var Employeemodel = mongoose.model('Employee', schema);
module.exports = Employeemodel;