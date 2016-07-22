module.exports = function(grunt) {


  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  	dist: {
  			files: {
  				'css/style.css': 'dev/css/*.scss'
  			}
  		}
  	},
    concat: {
        dist: {
          src: ['dev/js/*.js'],
          dest: 'dev/script.main.js',
        },
      },
    uglify: {
      dist: {
        src: ['dev/script.main.js'],
        dest: 'js/script.js',
        },
      },
    watch: {
          sass: {
            files: ["dev/css/*.scss"],
            tasks: ['scssToCss'],
          }
        }
  });

  grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('watchOn', ['watch']);

  grunt.registerTask('scssToCss', ['sass']);

  grunt.registerTask('default', ['sass']);



};
