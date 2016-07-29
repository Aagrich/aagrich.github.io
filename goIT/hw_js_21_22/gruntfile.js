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
    }
});


grunt.loadNpmTasks('grunt-babel');

grunt.registerTask('default', ['babel']);
grunt.registerTask('startBabel', ['babel']);

};
