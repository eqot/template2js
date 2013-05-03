
var argv = require('argv');
var _ = require('underscore');
var fs = require('fs');

argv.option({
    name: 'output',
    short: 'o',
    type: 'string',
    description: 'Specifies output type (amd)',
    example: "'template2js.js -o amd' or 'template2js.js --output=amd'"
});

var args = argv.run();
// console.log(args);
isAmd = args.options.output === 'amd';
// console.log(isAmd);

var inputFile = args.targets[0];
var inputNameBegin = inputFile.lastIndexOf('/') + 1;
var inputNameEnd = inputFile.lastIndexOf('.');
var inputName = inputFile.slice(inputNameBegin, inputNameEnd);
// console.log(inputNameBegin);
// console.log(inputNameEnd);
// console.log(inputName);

var inputData = fs.readFileSync(inputFile, 'utf8');
// console.log(inputData);

var templates = {};
templates[inputName] = inputData;

var data = '';
if (isAmd) {
    data += '/*global define */\ndefine([],funciton(){\n';
}
data += 'var template = {};\n';
_.each(templates, function(template, name) {
	data += 'template[\'' + name + '\']=' + _.template(template).source.replace(/\n/g, '') + ';\n';
});
if (isAmd) {
    data += 'return template;\n});\n';
}

var outputFile = args.targets[1] || inputFile.slice(0, inputNameEnd) + '.js';

fs.writeFileSync(outputFile, data, 'utf8');
