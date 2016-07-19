module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.min.js',
    },
  },
  uglify: {
      dist: {
         'js/dist/script.js' : ['js/dist/script.min.js']
      }
  }
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask( 'default' , ['uglify']);
grunt.registerTask( 'concat' , ['concat']);




};
