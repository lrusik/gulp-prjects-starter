let requireDir = require('require-dir');
let proj_name = process.argv[3].substr(2);
const gulp = require('gulp');
let proj_args = "";

module.exports = { sshConfig: {
  host: '',
  port: 22,
  username: '',
  password: ''
} };

if( typeof(process.argv[4]) != "undefined" ){
	proj_args = "_" + process.argv[4].substr(2);
}

requireDir(proj_name);
gulp.task("start", function() { 
	return new Promise(function(resolve, reject) {
		(gulp.parallel(proj_name + proj_args)());
		resolve();
	});
});
