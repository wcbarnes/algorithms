const expect = require('expect.js');
const radixSort = require('../algos/radix-sort.js');


describe('radixSort should sort an array', () => {
  it('should be a function', () => {
    expect(radixSort).to.be.a('function');
  });
});
