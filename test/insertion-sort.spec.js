const expect = require('expect.js');
const insertionSort = require('../algos/insertion-sort.js');


describe('insertionSort should sort an array', () => {
  it('should be a function', () => {
    expect(insertionSort).to.be.a('function');
  });
});
