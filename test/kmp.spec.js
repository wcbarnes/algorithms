const expect = require('expect.js');
const kmp = require('../algos/kmp.js');


describe('Knuth-Morris-Pratt algortithm', () => {
  it('should be a function', () => {
    expect(kmp).to.be.a('function');
  });
});
