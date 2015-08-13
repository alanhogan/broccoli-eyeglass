var BroccoliEyeglass = require('broccoli-eyeglass'),
  mergeTrees = require('broccoli-merge-trees'),
  fooOutput,
  barOutput;

fooOutput = new BroccoliEyeglass(['foo'], {
  cssDir: 'foo',
  verbose: true
});

barOutput = new BroccoliEyeglass(['bar'], {
  cssDir: 'bar',
  verbose: true
});

module.exports = mergeTrees([fooOutput, barOutput]);
