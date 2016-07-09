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
  	}
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);



};
