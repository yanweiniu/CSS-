module.exports = function(grunt) {
  // Do grunt-related things in here
  // 配置
    grunt.initConfig({
        
        concat : 
        {
            options: {
                     separator: ';',
                     stripBanners: true
                 },                 
            dist : {
                src: ['page/jquery.js', 'page/jquery_md5.js','page/moment.js','page/main.js'],
                dest: 'dist/main.js'
            }
        },
        uglify : {
            
            build : {
                src : 'dist/main.js',
                dest : 'dist/main.min.js'
            }
        },
        cssmin: {
               options: {
                   keepSpecialComments: 0
               },
               compress: {
                   files: {
                       'css-min/main-min.css': [
                           "css/*.css"
                       ]
                   }
               }
           }        
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify','cssmin']);
}