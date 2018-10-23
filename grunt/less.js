module.exports = {
  dist: {
    // paths: ['/bower_components/bootstrap'],
    options: {
      banner: '<%= banner %>'
    },
    files: {
      'dist/release/<%= pkg.unscopedname %>.css': ['src/less/main.less', 'src/features/*/less/**/*.less', '.tmp/font/ui-grid-codes.css']
    }
  },
  min: {
    options: {
      banner: '<%= banner %>',
      compress: true
    },
    files: {
      'dist/release/<%= pkg.unscopedname %>.min.css': ['src/less/main.less', 'src/features/*/less/**/*.less', '.tmp/font/ui-grid-codes.css']
    }
  }
};
