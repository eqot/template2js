template2js
===========

This is a command line tool to convert [underscore template](http://underscorejs.org/#template) into a JavaScript function.

This tool was required when I encountered a problem that underscore template does not work in Chrome app due to CSP (Content Security Policy)
as you can see [Matthew's blog](http://matthewrobertson.org/blog/2012/07/10/javascript-templates-and-chromes-content-security-policy/).

This tool allows us to pre-compile underscore template in a html file into a JavaScript function in a .js file.
Your Chrome app can load the .js file for using the underscore template without CSP violation.


Prerequisites
-------------

  * [Node.js](http://nodejs.org/) v0.8 or later


Installing template2js
----------------------

```
wget https://raw.github.com/eqot/template2js/master/template2js.js
```


Usage
-----

```
node template2js.js <input> [<output>]
```

Using just ```node template2js.js <input>``` will output a file which replaces input file's extension with .js.


License
-------
Copyright 2013 Ikuo Terado. Released under a [MIT license](http://www.opensource.org/licenses/mit-license.php).
