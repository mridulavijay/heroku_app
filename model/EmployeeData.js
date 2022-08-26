const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/employeeDB?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const EmployeeSchema=new Schema({
    name:String,
    position:String,
    location:String,
    salary:String
});
var Employeedata=mongoose.model('list',EmployeeSchema);
module.exports=Employeedata;