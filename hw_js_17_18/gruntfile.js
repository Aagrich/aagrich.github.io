module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.min.js',
    },
  },
  uglify: {
      build: {
          src: 'js/src/*.js',
          dest: 'js/dist/production.min.js'
      }
  }
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask( 'default' , ['uglify']);
grunt.registerTask( 'concat' , ['concat']);




};
