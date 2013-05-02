
var _ = require('underscore');
var fs = require('fs');

var output = 'template.js';

var templates = {
	foo: '<b><%= name %></b>',
	bar: '<b><%= name %></b>'
}

var data = 'var template = {};\n';
for (var name in templates) {
	data += 'template[\'' + name + '\']=' + _.template(templates[name]).source.replace(/\n/g, '') + ';\n';
}
var fd = fs.openSync(output, 'w');

fs.writeSync(fd, data, 0);
