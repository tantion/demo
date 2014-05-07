// vim:ts=2:sts=2:sw=2:
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      debug: {
        options: {
          port: 9090,
          hostname: 'localhost',
          keepalive: true,
          livereload: true,
          open: true,
          base: '.'
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.debug.options.livereload %>'
        },
        files: [
          '**/*.html',
          '**/*.js',
          '**/*.css'
        ]
      }
    }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect:debug']);

};
