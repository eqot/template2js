
var argv = require('argv');
var _ = require('underscore');
var fs = require('fs');

var args = argv.run();
// console.log(args);

var inputFile = args.targets[0];
var inputNameBegin = input.lastIndexOf('/') + 1;
var inputNameEnd = input.lastIndexOf('.');
var inputName = input.slice(inputNameBegin, inputNameEnd);
// console.log(inputNameBegin);
// console.log(inputNameEnd);
// console.log(inputName);

var inputData = fs.readFileSync(inputFile, {encoding: 'utf8'});
// console.log(inputData);

var templates = {};
templates[inputName] = inputData;

var data = 'var template = {};\n';
_.each(templates, function(template, name) {
	data += 'template[\'' + name + '\']=' + _.template(template).source.replace(/\n/g, '') + ';\n';
});

var outputFile = args.targets[1] || input.slice(0, inputNameEnd) + '.js';

fs.writeFileSync(outputFile, data, {encoding: 'utf8'});
