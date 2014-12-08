/*
 * grunt-fontello-svg
 * https://github.com/chimo/grunt-fontello-svg
 *
 * Copyright (c) 2014 chimo
 * Licensed under the MIT license.
 */

'use strict';

var fontello_svg = require('fontello-svg');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('fontello_svg', 'Generate the SVG versions of a Fontello icon set.', function() {
    var done = this.async();
      
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // fontello_svg.fontelloSvg('test/fontello-config.json', 'test/out', {"verbose": true}, function () {
    fontello_svg.fontelloSvg(this.data.config, this.data.dest, this.data.options, function () {
        done();
    });

    // Iterate over all specified file groups.
    /* this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    }); */
  });

};
