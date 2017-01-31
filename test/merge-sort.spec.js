const expect = require('expect.js');
const mergeSort = require('../algos/merge-sort.js');


describe('Should sort the array', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.a('function');
  });
});
