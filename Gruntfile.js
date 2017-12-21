module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            /* 
             *   Config para desenvolvimento no grunt watch
             */

            dev: {
                options: {
                    style: 'expanded',
                    loadPath: 'sass/'
                },
                files: {
                    'public/css/style.css': 'sass/main.scss'
                }
            },

            /*
             * Config pra gerar o prod
             */ 

            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'public/css'
                },
                files: {
                    'public/css/style.min.css': 'sass/main.scss'
                }
            }
        },

        /*
         * Config watch assistir qualquer alteração no diretorio sass nos arquivos ".scss"
         */

        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('prod', ['sass:dist']);
}