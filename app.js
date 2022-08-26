const express=require('express');
const cors=require('cors');
const path=require('path');
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./dist/Frontend'));
const Employeedata=require('./model/EmployeeData');

app.get('/api/list',function(req,res){
Employeedata.find()
.then(function(data){
    res.send(data);
})
})
app.post('/api/newdata',function(req,res){
    var newdata={
        name:req.body.name,
        position:req.body.position,
        location:req.body.location,
        salary:req.body.salary
    }
    var Employee=Employeedata(newdata);
    Employee.save();

    Employeedata.find()
.then(function(data){
    res.send(data);
})
})
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
   });
app.listen(3000);