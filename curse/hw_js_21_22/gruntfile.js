module.exports = function(grunt) {


grunt.initConfig({
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                'js/testing.js': 'js/script.js'
            }
        }
    },
    watch: {
      babel: {
        files: ["js/script.js"],
        tasks: ['startBabel'],
      }
    }
});


grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['babel']);
grunt.registerTask('startBabel', ['babel']);
grunt.registerTask('watchOn', ['watch']);

};
