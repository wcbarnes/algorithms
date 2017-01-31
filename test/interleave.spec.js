const expect = require('expect.js');
const interleave = require('../algos/interleave.js');


describe('interleave two arrays', () => {
  it('should be a function', () => {
    expect(interleave).to.be.a('function');
  });
});
