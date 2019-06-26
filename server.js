var express=require('express');
var appln=express();

var gatherInformation=function(req,resp)
{
console.log('hello');
var accinfo=[
	{accountid:1,customername:'sushrut',company:'Infosys',bill:4000000},
	{accountid:2,customername:'sush',company:'HSBC',bill:6000000},
	{accountid:3,customername:'abc',company:'Deutshe Bank',bill:80000000}
	];
	resp.send(accinfo);
};

appln.get('/acc',gatherInformation);

var server = appln.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("port is 8089", host, port)
})