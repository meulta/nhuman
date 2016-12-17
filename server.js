var kernel =            require("./kernel/app.js");
var brainfs =           require("./brainfs/init.js");
var machinelearning =   require("./machinelearning/app.js");
var devices =           require("./devices/index.js");
var skills =            require("./skills/index.js");
var modules =           require("./modules/index.js");

brainfs.load();
machinelearning.load(brainfs,skills);
kernel.run(brainfs, devices, skills, modules);

var express = require('express');
var app = express();

app
  .get('/', function (req, res) {
  res.send(kernel.process(req.params));
})
  .get('/:query', function (req, res) {
  res.send(kernel.process(req.params));
});

app.listen(9999, function () {
  console.log('Brain works !');
});