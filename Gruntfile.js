'use strict';
module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var config = {
        app : 'app',
        dist : 'dist',
    };

    grunt.initConfig({
        config : config,
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/{,*/}*',
                    ]
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    '<%= config.dist %>/css/app.css': [
                        '<%= config.app %>/css/reset.css',
                        '<%= config.app %>/css/bootstrap.min.css',
                        '<%= config.app %>/css/styles.css',
                    ]
                },{
                    '<%= config.dist %>/css/mobile.css': [
                        '<%= config.app %>/css/mobile.css',
                    ]
                }]
            }
        },
        uglify: {
            options: {
                sourceMap: function(dest){
                    return dest+'.map';
                },
                mangle :true,
            },
            dist: {
                files: {
                    '<%= config.dist %>/js/app-<%= pkg.version %>.js': '<%= config.dist %>/js/app-<%= pkg.version %>.js',
                    '<%= config.dist %>/js/vendor-<%= pkg.version %>.js': '<%= config.dist %>/js/vendor-<%= pkg.version %>.js',
                },
            }
        },
        concat:{
            dist: {
                files: {
                    '<%= config.dist %>/js/vendor-<%= pkg.version %>.js':['<%= config.app %>/js/vendor/jquery.js','<%= config.app %>/js/vendor/jquery-ui-effect.js','<%= config.app %>/js/vendor/jquery.scrollTo.js','<%= config.app %>/js/vendor/{,*/}*.js'],
                    '<%= config.dist %>/js/app-<%= pkg.version %>.js':['<%= config.app %>/js/angular/*.js','<%= config.app %>/js/*.js'],
                },
            }
        },
        copy:{
            dist:{
                files: [{
                    expand : true,
                    dot : true,
                    cwd: '<%= config.app %>/',
                    dest: '<%= config.dist %>/',
                    src: ['img/**/*','svg/**/*','pdf/**/*','lib/**/*']
                }],
            }
        },
        watch: {
            app: {
                files: ['<%= config.app %>/**/*.css','<%= config.app %>/**/*.js'],
                tasks: ['default']
            }
        }
    });

    grunt.registerTask('default', [
        'clean:dist',
        'copy',
        'concat:dist',
        'uglify',
        'cssmin',
        //'watch'
    ]);
};
