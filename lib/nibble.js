
// nibble
// Copyright (c) 2012 Matias Meno <m@tias.me>
// MIT Licensed


// Module dependencies.
stylus = require("stylus");

// The plugin callback for stylus.
exports = module.exports = function() {
  return function (style) {
    style.include(__dirname);
  };
};

exports.version = '0.0.3-dev';

exports.path = __dirname;
