module.exports = function (grunt) {
  grunt.initConfig({

    concat: {
      options: {
        separator: '\n\n//------------------------------------------\n',
        banner: '//------------------ Concatenated Script -------------------\n'
      },
      dist: {
        src: ['components/javascripts/*.js'],
        dest: 'builds/development/javascripts/script.js'
      }
    }, // concat

    bower_concat: {
      all: {
        dest: 'builds/development/javascripts/_bower.js',
        cssDest: 'builds/development/stylesheets/_bower.css'
      }
    }, // bower_concat

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          src: 'components/sass/style.scss',
          dest: 'builds/development/stylesheets/style.css'
        }]
      }
    }, // scss

    connect: {
      server: {
        options: {
          port: 3000,
          hostname: 'localhost',
          base: 'builds/development/',
          livereload: true
        }
      }
    }, //connect

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: [
          'builds/development/**/*.html',
          'components/javascripts/**/*.js',
          'components/sass/**/*.scss'
        ],
        tasks: ['concat', 'sass']

      }
    } // watch

  }); // initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.registerTask('default', ['bower_concat', 'concat', 'sass', 'connect', 'watch']);

}; // Wrapper Function