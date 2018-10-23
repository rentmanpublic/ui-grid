module.exports = {
  options: {
    dest: '<%= dist %>/docs',
    testingUrlPrefix: '<%= protractor.options.args.baseUrl %>/docs/#!/',
    versionedFiles: {
      default: 'stable',
      waitEval: "(function() { var ret = true; try { angular.module('ui.grid'); } catch (e) { ret = false; } return ret; })()",
      versions: {
        stable: [
          { src: '/release/<%= pkg.unscopedname %>.js', type: 'script' },
          { src: '/release/<%= pkg.unscopedname %>.css', type: 'css' }
        ],
        unstable: [
          { src: '/release/<%= pkg.unscopedname %>-unstable.js', type: 'script' },
          { src: '/release/<%= pkg.unscopedname %>-unstable.css', type: 'css' }
        ]
      }
    },
    scripts: [
       // no jquery automatically loaded for tutorial!!!
      '//ajax.googleapis.com/ajax/libs/angularjs/<%= latestAngular %>/angular.js',
      '//ajax.googleapis.com/ajax/libs/angularjs/<%= latestAngular %>/angular-touch.js',
      '//ajax.googleapis.com/ajax/libs/angularjs/<%= latestAngular %>/angular-animate.js',
      '//ajax.googleapis.com/ajax/libs/angularjs/<%= latestAngular %>/angular-aria.js',
      'bower_components/csv-js/csv.js',
      'bower_components/pdfmake/build/pdfmake.js',
      'bower_components/pdfmake/build/vfs_fonts.js',
      'bower_components/lodash/dist/lodash.min.js',
      'bower_components/jszip/dist/jszip.min.js',
      'bower_components/excel-builder-js/dist/excel-builder.dist.js'
    ],
    hiddenScripts: [
      'bower_components/google-code-prettify/src/prettify.js',
      'node_modules/marked/lib/marked.js'
    ],
    httpScripts: [
      // process.env.TRAVIS ? '/release/<%= pkg.unscopedname %>.unstable.js' : '/release/<%= pkg.unscopedname %>.js'
      // '/release/<%= pkg.unscopedname %>.js'
    ],
    styles: [
      'misc/doc/css/prettify.css',
      //'misc/doc/css/bootstrap-flatly.min.css',
      //'misc/doc/css/docs.css',
      // process.env.TRAVIS ? '<%= dist %>/release/<%= pkg.unscopedname %>.unstable.css' : '<%= dist %>/release/<%= pkg.unscopedname %>.css'
      // '<%= dist %>/release/<%= pkg.unscopedname %>.css'
    ],
    baseCSSPath: 'misc/doc/css/bootstrap-flatly.min.css',
    title: 'UI Grid',
    titleLink: '/',
    html5Mode: false,
    analytics: {
      account: 'UA-46391685-1',
      domainName: 'ui-grid.info'
    },
    adsConfig: {
      client: 'ca-pub-6177019177103290',
      slot: '3609320072'
    },
    navTemplate: 'misc/doc/templates/nav.html'
  },
  api: {
    src: ['src/**/*.js', 'misc/api/**/*.ngdoc', 'test/e2e/**/*.js'],
    title: 'API'
  },
  tutorial: {
    src: ['misc/tutorial/**/*.ngdoc'],
    title: 'Tutorial'
  }
};
