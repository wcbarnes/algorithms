const expect = require('expect.js');
const heapSort = require('../algos/heap-sort.js');


describe('heapSort should sort an array', () => {
  it('should be a function', () => {
    expect(heapSort).to.be.a('function');
  });
});
