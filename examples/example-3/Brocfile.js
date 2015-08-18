var BroccoliEyeglass = require('broccoli-eyeglass');

var options = {
  cssDir: '/',

  includePaths: ['../../shared-sass-files'],

  verbose: true
};

var outputTree = new BroccoliEyeglass(['src'], options);

module.exports = outputTree;
