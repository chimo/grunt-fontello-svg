/*
 * grunt-fontello-svg
 * https://github.com/chimo/grunt-fontello-svg
 *
 * Copyright (c) 2014 chimo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var fontello_svg = require('fontello-svg');

  grunt.registerMultiTask('fontello_svg', 'Generate the SVG versions of a Fontello icon set.', function() {
    var done = this.async(),
        options = this.options({
            css: true,
            skip: false,
            verbose: false
        });

    fontello_svg.fontelloSvg(this.data.config, this.data.dest, options, function () {
        done();
    });
  });
};
