/*
 * grunt-fontello-svg
 * https://github.com/chimo/grunt-fontello-svg
 *
 * Copyright (c) 2014 chimo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp/*']
    },

    // Configuration to be run (and then tested).
    fontello_svg: {
      default_options: {
        options: {
          fillColors: {
            'red': '#FF0000'
          },
          css: false,
          skip: true/*,
          cssPath: TODO*/
        },
        config: 'node_modules/fontello-svg/test/fontello-config.json',
        dest: 'tmp/'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'fontello_svg', 'nodeunit']);

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('default', ['jshint', 'clean', 'fontello_svg']);
};
