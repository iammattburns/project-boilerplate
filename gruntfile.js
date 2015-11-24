module.exports = function(grunt) {
  

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssPath: 'dist/css/global.css',
    jsPath: 'dist/js/global.min.js',
    watch: {
      sass: {
        files: ['src/scss/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['dist/*.html', 'dist/*.php', 'dist/js/**/*.{js,json}', 'dist/css/**/*.css','dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'uncompressed'
      },
      dist: {
        files: {
          '<%= cssPath %>': 'src/scss/global.scss'
        }
      }
    },
    autoprefixer: {
        dist: {
            files: {
                '<%= cssPath %>': '<%= cssPath %>'
            }
        }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          '<%= jsPath %>': ['src/js/global.js']
        }
      }
    },
    csslint: {
      strict: {
        options: {
          force: true
        },
        src: ['<%= cssPath %>']
      }
    },
  });
  grunt.registerTask('build', ['jshint', 'uglify', 'autoprefixer']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
};
