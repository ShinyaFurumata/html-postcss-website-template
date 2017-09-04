'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', (cb) => {
  runSequence(['css', 'html' , 'bower' ], ['js', 'serve', 'imageOptimize'], cb)
});
