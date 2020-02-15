const requireDir = require('require-dir');
const gulp = require('gulp');
let proj_args = "";
let proj_name = process.argv[3].substr(2);

proj_name = (proj_name[proj_name.length - 1] == '/' || proj_name[proj_name.length - 1] == '\\') ? (proj_name.substr(0, proj_name.length - 1) ) : (proj_name); 

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

