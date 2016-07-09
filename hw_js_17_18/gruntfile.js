module.exports = function(grunt) {


grunt.initConfig({
  uglify: {
      my_target: {
          files: {
            'js/dist/script.test.js': ['js/src/*.js']
          }
      }
  }
});


grunt.loadNpmTasks("grunt-contrib-uglify");

grunt.registerTask( 'default' , ['uglify']);


};
