module.exports = function(grunt) {
  grunt.initConfig({
    umd: {
      all: {
        src: 'src/rivets-iota-observable-adapter.js',
        dest: 'rivets-iota-observable-adapter.js',
        objectToExport: 'null',
        globalAlias: 'nul',
        deps: {
          'default': ['rivets']
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-umd');
  
  grunt.registerTask('default', 'umd');
};
