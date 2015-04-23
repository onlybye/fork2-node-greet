#!/usr/bin/env node
var parseArgs = require('minimist');
var greet=require("greet");

var args=parseArgs(process.argv.slice(2));
console.log(args);
//console.log(greet.greet(process.argv[2],args.drunk));