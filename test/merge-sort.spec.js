const expect = require('expect.js');
const mergeSort = require('../algos/merge-sort.js');


describe('mergeSort should sort the array', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.a('function');
  });
});
