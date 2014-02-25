/*
 * grunt-sass-imports
 * https://github.com/ITspirit/grunt-sass-imports
 *
 * Copyright (c) 2014 Michael Frank
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Expose package.json on grunt config
		package: grunt.file.readJSON('package.json'),

		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		sass_imports: {
			test_src_dest: {
				options: {
				},
				src: [ 'test/fixtures/*.sass', 'test/fixtures/*.css'], // test using incorrect order, because we handle this
				dest: 'tmp/test_src_dest/imports.sass'
			},
			test_files: {
				options: {
				},
				files: {
					'tmp/test_files/imports.sass': ['test/fixtures/styles.sass', 'test/fixtures/styles.css']
				}
			},
			inline_css_false: {
				options: {
					inlineCSS: false
				},
				src: ['test/fixtures/*.css', 'test/fixtures/*.sass'],
				dest: 'tmp/inline_css_false/imports.sass'
			},
			test_custom_banner: {
				options: {
					banner: '// Auto-generated for <%= package.name %>'
				},
				src: ['test/fixtures/*.sass', 'test/fixtures/*.css'],
				dest: 'tmp/test_custom_banner/imports.sass'
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		},

		sass: {
			compile: {
				files: {
					'tmp/compiled/test_default.css': 'tmp/test_src_dest/imports.sass',
					'tmp/compiled/inline_css_false.css': 'tmp/inline_css_false/imports.sass'
				}
			}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', [/*'clean',*/ 'sass_imports', 'sass', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
