module.exports = function(grunt) {


  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  	dist: {
  			files: {
  				'css/style.css': 'dev/css/style.scss'
  			}
  		}
  	},
    concat: {
        dist: {
          src: ['dev/js/*.js'],
          dest: 'dev/script.main.js',
        },
//        css: {
//          src: ['dev/*.css'],
//          dest: 'css/style.css',
//        },
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
          },
          concat: {
            files: ['dev/js/*.js'],
            tasks: ['concatJS'],
          },
 //         concat: {
 //           files: ['dev/*.css'],
 //           tasks: ['concatJS'],
 //         },
          uglify: {
            files: ['dev/*.js'],
            tasks: ['uglifyJS'],
          }
        }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('watchOn', ['watch']);

  grunt.registerTask('scssToCss', ['sass']);
  grunt.registerTask('concatJS', ['concat']);
  grunt.registerTask('uglifyJS', ['uglify']);

  grunt.registerTask('default', ['sass' , 'concat', 'uglify' ]);



};
