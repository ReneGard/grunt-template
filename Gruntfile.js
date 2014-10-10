module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    cleancss: true,
                    compress: false,
                    optimization: 2,
                    sourceMap: false
                },
                files: {
                    // target.css file: source.less file
                    'dist/css/main.css': 'source/css/main.less'
                }
            }
        },

        concat: {
            dist: {
                src: ['source/js/lib/jquery.1.11.1.min.js', 'source/js/jquery.tmpl.min.js'],  // какие файлы конкатенировать
                dest: 'dist/js/build.js'  // куда класть файл, который получиться после процесса конкатенации
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.author %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n' //комментарий который будет в минифицированном файле.
            },
            css: {
                src: 'dist/js/build.js',  // минифицируемый файл
                dest: 'dist/js/build.min.js' // файл, который получиться после процесса минификации
            }
        },

        watch: { //описываем работу плагина слежки за файлами.
            scripts: {
                files: ['source/js/*.js'],  //следить за всеми js файлами в папке src
                tasks: ['concat', 'uglify']  //при их изменении запускать следующие задачи
            },
            css: {
                files: ['source/css/*.less'],
                tasks: ['less', 'uglify']
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    //регистрируем задачу
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('default', ['less', 'concat', 'uglify', 'watch']); //задача по умолчанию, просто grunt

};