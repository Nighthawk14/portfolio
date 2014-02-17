module.exports = function (grunt) {
    'use strict';
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
                        '<%= config.dist %>',
                    ]
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    '<%= config.dist %>/css/app.css': [
                        '<%= config.app %>/css/common.css',
                        '<%= config.app %>/css/styles.css',
                    ],
                    '<%= config.dist %>/css/vendor.css': [
                        '<%= config.app %>/css/reset.css',
                        '<%= config.app %>/css/bootstrap.min.css',
                        '<%= config.app %>/css/ionicons.css',
                    ],
                    '<%= config.dist %>/css/mobile.css': [
                        '<%= config.app %>/css/common.css',
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
                    '<%= config.dist %>/js/app.js': '<%= config.dist %>/js/app.js',
                    '<%= config.dist %>/js/vendor.js': '<%= config.dist %>/js/vendor.js',
                },
            }
        },
        concat:{
            dist: {
                files: {
                    '<%= config.dist %>/js/vendor.js':['<%= config.app %>/js/vendor/jquery.js','<%= config.app %>/js/vendor/jquery-ui-effect.js','<%= config.app %>/js/vendor/jquery.scrollTo.js','<%= config.app %>/js/vendor/{,*/}*.js'],
                    '<%= config.dist %>/js/app.js':['<%= config.app %>/js/angular/*.js','<%= config.app %>/js/*.js'],
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
                    src: ['img/**/*','svg/**/*','pdf/**/*','lib/**/*','fonts/**/*']
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
