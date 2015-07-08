module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      combine: {
        files: {
          'style.min.css': ['style/*.css']
        }
      }
    },
    watch: {
          style: {
            files: 'style/*.css',
            tasks: ['style'],
            options: {
              debounceDelay: 250,
            },
          }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('style', ['cssmin']);
  grunt.registerTask('default');
};
