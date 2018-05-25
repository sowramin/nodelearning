var express= require('express');
var fs= require('fs');

var app=express();

var user={
	"user5" : {
		"name" : "Mohit",
		"password" : "ppp",
		"profession" : "teacher",
		"id" : 4
		}
	};

app.post('/adduser', function(req,res){
 
fs.readFile( __dirname + "/" + "users.json", 'utf8' , function(err, data){
		data=JSON.parse(data);
		data[user4]= user[user4];
		console.log("data", data) ;
		res.end(JSON.stringify(data));
	});
})

var server= app.listen(8082, function(){
 var host= server.address().address;
 var port= server.address().port;
 console.log("server is listening to ", host, port);

})


