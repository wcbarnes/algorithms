const expect = require('expect.js');
const quickSort = require('../algos/quicksort.js');


describe('Quicksort should sort an array', () => {
  it('should be a function', () => {
    expect(quickSort).to.be.a('function');
  });
});
