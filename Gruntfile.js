// Generated on 2014-03-02 using generator-angular 0.7.1
'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Load custom tasks
  grunt.loadTasks('tasks');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    tx: {
      'move': [
        {
          sourceFile: './po/template.pot',
          targetFilePath: './po/_lang_._type_',
          type: 'PO'
        }
      ]
    },

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      jsTest: {
        files: ['test/**/*.js'],
        tasks: ['karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['ngconstant:development']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.app %>/views/**/*.html',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '<%= yeoman.app %>/scripts/fixtures/*.json'
        ]
      },
      fixtures: {
        files: ['<%= yeoman.app %>/scripts/fixtures/*.json'],
        tasks: ['fixtures']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/**/*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      target: {
        src: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*',
            '!<%= yeoman.dist %>/scripts/main*.js',
            '!<%= yeoman.dist %>/images/icon{,-*}.png',
            '!<%= yeoman.dist %>/images/vvm-icons/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: [
        '<%= yeoman.dist %>/*.html',
        '<%= yeoman.dist %>/views/**/*.html'
      ],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    removelogging: {
      dist: {
        src: '.tmp/concat/scripts/scripts.js',
        options: {
          namespace: [
            'console',
            'window.console',
            '\\$log'
          ]
        }
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'views/**/*.html',
              'images/{,*/}*.{webp}',
              'media/*',
              'scripts/fixtures/*.json',
            ]
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= yeoman.dist %>/images',
            src: ['generated/*']
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/bower_components/font-awesome',
            dest: '<%= yeoman.dist %>',
            src: ['fonts/*']
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      snapshot: {
        files: [
          '<%= copy.dist.files %>',
          {
            expand: true,
            cwd: '<%= yeoman.app %>/',
            dest: '<%= yeoman.dist %>',
            src: [
              'scripts/{,*/}*.js',
              'styles/{,*/}*.css',
              'images/{,*/}*',
              'bower_components/font-awesome/fonts/*'
            ]
          }
        ]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    protractor: {
      e2e: {
        configFile: 'protractor.conf.js'
      }
    },

    ngconstant: {
      options: {
        name: 'config',
        dest: '<%= yeoman.app %>/scripts/config.js',
        serializerOptions: {
          indent: ' '
        },
        constants: {
          config: {
            version: grunt.file.readJSON('package.json').version
          }
        }
      },
      // Targets
      test: {
        constants: {
          config: grunt.file.readJSON('config/test.json')
        }
      },
      development: {
        constants: {
          config: grunt.file.readJSON('config/development.json')
        }
      },
      production: {
        constants: {
          config: grunt.file.readJSON('config/production.json')
        }
      }
    },

    bump: {
      options: {
        files: [
          'package.json',
          'bower.json'
        ],
        commitFiles: '<%= bump.options.files %>',
        pushTo: 'origin'
      }
    },

    wiredepCopy: {
      snapshot: {
        options: {
          src: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          wiredep: '<%= wiredep.target %>'
        }
      }
    },

    eslint: {
      options: {
        config: '.eslintrc',
        rulesdir: [
          'node_modules/eslint-no-exclusive-tests/lib/rules'
        ]
      },
      all: '<%= jshint.all %>',
      test: {
        options: {
          config: 'test/.eslintrc'
        },
        src: '<%= jshint.test.src %>'
      }
    },

    jsbeautifier: {
      options: {
        mode: 'VERIFY_ONLY',
        jsbeautifyrc: true
      },
      src: '<%= jshint.all %>'
    },

    jscs: {
      src: '<%= jshint.all %>'
    },

    html2js: {
      options: {
        // custom options, see below
        base: 'app',
        module: 'lmisChromeApp.templates',
        singleModule: true
      },
      main: {
        src: ['app/views/**/*.html', 'app/bower_components/**/*.tpl.html'],
        dest: '.tmp/templates.js'
      },
    },

    fixtures: {
      all: {
        options: {
          dest: '<%= yeoman.app %>/scripts/db.js'
        },
        files: [{
          expand: true,
          src: '<%= yeoman.app %>/scripts/fixtures/*.json'
        }]
      }
    },

    /*eslint-disable camelcase */
    nggettext_extract: {
    /*eslint-enable camelcase */
      pot: {
        files: {
          'po/template.pot': [
            'app/{views,templates}/{,**/}*.html',
            'app/scripts/{,**/}*.js'
          ]
        }
      }
    },

    /*eslint-disable camelcase */
    nggettext_compile: {
    /*eslint-enable camelcase */
      all: {
        options: {
          module: 'lmisChromeApp'
        },
        files: {
          'app/scripts/translations.js': ['po/*.po']
        }
      }
    },

    toggleComments: {
      index: {
        src: '<%= yeoman.dist %>/index.html',
        dest: '<%= toggleComments.index.src %>'
      },
      dist: {
        options: {
          removeCommands: true
        },
        src: '<%= toggleComments.index.src %>',
        dest: '<%= toggleComments.index.src %>'
      }
    },

    ehaCordovaBuild: {
      options: {
        appdir: 'move',
        package: 'com.ehealthafrica.lomis',
        appname: 'Move',
        buildCmd: 'grunt build:{%= type %}'
      }
    }
  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'ngconstant:development',
      'fixtures',
      //'nggettext_compile',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', function(target) {
    grunt.task.run(['ngconstant:test']);
    if (target === 'unit') {
      return grunt.task.run(['karma:unit']);
    } else if (target === 'e2e') {
      return grunt.task.run(['protractor:e2e']);
    }

    grunt.task.run([
      'clean:server',
      'nggettext_compile',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'karma'
    ]);
  });

  grunt.registerTask('build', function(target) {
    var common = [
      'clean:dist',
      'wiredep',
      'fixtures'
    ];

    var release = [
      'ngconstant:production',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'removelogging',
      'ngAnnotate',
      'copy:dist',
      'toggleComments:dist',
      'cssmin',
      'uglify',
      'rev',
      'usemin',
      'htmlmin'
    ];

    var snapshot = [
      'ngconstant:development',
      'autoprefixer',
      'copy:snapshot',
      'wiredepCopy:snapshot',
      'toggleComments:index'
    ];

    if (target === 'release') {
      grunt.task.run(common.concat(release));
    } else {
      grunt.task.run(common.concat(snapshot));
    }
  });

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('release', function(versionType) {
    var bump = 'bump';
    if (versionType) {
      bump += ':' + versionType;
    }
    grunt.task.run([
      bump
    ]);
  });

  grunt.registerTask('checkstyle', [
    'jshint',
    'eslint',
    'jscs',
    'jsbeautifier'
  ]);
};
