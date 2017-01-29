const expect = require('expect.js');
const countSort = require('../algos/count-sort.js');


describe('Should sort the array', () => {
  it('should be a function', () => {
    expect(countSort).to.be.a('function');
  });
});