var express = require('express')
//var bodyParser = require('body-parser')
//var _ = require('underscore')
var app = express()
var PORT = process.env.PORT || 3000
//app.use(bodyParser.json())
var http =require('http').Server(app)

app.use(express.static(__dirname+'/public'))


http.listen(PORT, function () {
	// body...
	console.log(" Server is now running on "+PORT)
})