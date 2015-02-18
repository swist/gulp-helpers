var gulp = require('gulp');

var vinylPaths = require('vinyl-paths');
var del = require('del');

class CleanTask {
  setOptions(options) {
    this.options = options;

    if (!this.options.path) {
      throw new Error('CleanTask: Path is missing from configuration!');
    }

    return this;
  }

  defineTask() {
    let options = this.options;
    gulp.task('clean', options.taskDeps, function() {
      return gulp.src([ options.path ]).pipe(vinylPaths(del));
    });
  }
}

module.exports = new CleanTask();