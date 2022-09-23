'use strict';

var path = require('path');
const spdy = require("spdy")
var express = require('express');
var oas3Tools = require('oas3-tools');
var serverPort = 80;
const process = require('process');
var fs = require('fs');
var pidFile;

// Printing process.pid property value
console.log("process id is " + process.pid);

pidFile = fs.createWriteStream("/run/udr.pid");
pidFile.write(process.pid.toString());
pidFile.end();

process.on("error", function(err) {
    console.error(err);
})

process.on("close", function(err) {
    fs.unlink("/run/udr.pid", function (err) {});
});

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers'),
        useStubs: true
    },
 //   app: myapp
};

var options1 = {
    //key: fs.readFileSync('serverkey1.pem'),
    //cert: fs.readFileSync('servercert1.pem'),
    allowHTTP1: true,

 spdy: {
	 plain: true,
	 ssl: false

 }
};


var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);

var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
spdy.createServer(options1,app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

