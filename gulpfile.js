/**
 * zander 2017.11.25
 */
var prod = require('./build/gulpfile.prod.js');
var dev = require('./build/gulpfile.dev.js');
prod();
dev();