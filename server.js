var express =require('http')
var product = [{
	id: 11
	name:'vishal'
	age: 25
},
{
	id: 12
	name:"akshay"
	age: 24
},
{
	id: 13
	name:"dev"
	age: 23
},
{
	id: 14
	name:'sanket'
	age: 22
},

]
var customerController=function (req, res) {
  console.log("CAlling rest api");
  var abc=[
            {empId:'11',empName:'vishal',age:25},
			 {empId:'11',empName:'akshay',age:24},
			  {empId:'11',empName:'dev',age:23},
			  {empId:'11',empName:'sanket',age:22}
			  
            
      ];
  res.send(xyz);
};

app.get('/xyz',customerController );

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8082", host, port)
})