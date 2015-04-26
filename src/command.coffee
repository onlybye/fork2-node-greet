parseArgs = require('minimist')
greet = require('greet')
args = parseArgs(process.argv.slice(2))
#console.log(args);
console.log greet(process.argv[2], args.drunk)