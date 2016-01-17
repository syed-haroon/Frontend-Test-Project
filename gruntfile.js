module.exports = function (grunt) {
  grunt.initConfig({

    concat: {
      options: {
        separator: '\n\n//------------------------------------------\n',
        banner: '//------------------ Concatenated Script -------------------\n'
      },
      dist: {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/javascripts/script.js'
      }
    }, // concat

    sass: {
      dist: {
        options: {
          style: 'expanded'
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

    wiredep: {
      task: {
        src: 'builds/development/**/*.html'
      }
    }, // wiredep

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: [
          'builds/development/**/*.html',
          'components/javascripts/**/*.js',
          'components/sass/**/*.js'
        ],
        tasks: ['concat', 'sass']

      }
    } // watch

  }); // initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['wiredep', 'concat', 'sass', 'connect', 'watch']);

}; // Wrapper Function