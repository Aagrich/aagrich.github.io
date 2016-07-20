module.exports = function(grunt) {


grunt.initConfig({
  uglify: {
      dist: {
        src: ['dev/script.main.js'],
        dest: 'js/script.js',
      },
  },
  concat: {
    dist: {
      src: ['dev/js/*.js'],
      dest: 'dev/script.main.js',
    },
  },
});


grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-concat");

grunt.registerTask( 'default' , [ 'concat', 'uglify']);

grunt.registerTask('minimize', ['uglify']);
grunt.registerTask('concatJS', ['concat']);


};
