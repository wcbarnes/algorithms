const expect = require('expect.js');
const binarySearch = require('../algos/binary-search');


describe('binarySearch should find an element faster the linear time', () => {
  it('should be a function', () => {
    expect(binarySearch).to.be.a('function');
  });
});
