var BroccoliEyeglass = require('broccoli-eyeglass'),
  mergeTrees = require('broccoli-merge-trees'),
  fooOutput,
  barOutput;

fooOutput = new BroccoliEyeglass(['foo'], {
  cssDir: 'foo',
  verbose: true
});

console.log("fooOutput", fooOutput);

barOutput = new BroccoliEyeglass(['bar'], {
  cssDir: 'bar',
  verbose: true
});

console.log("barOutput", barOutput);

module.exports = mergeTrees([fooOutput, barOutput]);
