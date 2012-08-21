
// nibble
// Copyright (c) 2012 Matias Meno <m@tias.me>
// MIT Licensed


// Module dependencies.
stylus = require("stylus");

exports.version = '0.0.1-dev';

exports.path = __dirname;

// The plugin callback for stylus.
exports = module.exports = function() {
  return function (style) {
    style.include(__dirname);
  };
};
