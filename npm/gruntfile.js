module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    options: {
      separator: ';'
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.min.js',
    },
  },
  uglify: {
      dist: {
          src: ['js/dist/script.min.js'],
          dest: 'js/dist/script.min.js',
      }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask( 'default' , ['concat', 'uglify']);

grunt.registerTask( 'concat' , ['concat']);
grunt.registerTask( 'uglife' , ['uglify']);
};
