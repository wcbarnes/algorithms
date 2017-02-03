const expect = require('expect.js');
const countSort = require('../algos/count-sort.js');


describe('countSort should sort the array', () => {
  it('should be a function', () => {
    expect(countSort).to.be.a('function');
  });

  it('should sort an array', () => {
    expect(countSort([5, 7, 3, 8, 6, 9, 4, 2, 10, 1])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(countSort([1, 2, 1, 2, 1, 2])).to.eql([1, 1, 1, 2, 2, 2]);
  });

  it('should sort a very large array', () => {
    const arr = Array.from({ length: 10000000000 }, () => {
      return Math.floor(Math.random() * 100000);
    });
    expect(countSort(arr)).to.eql(arr.sort((a, b) => a - b));
  });

  it('should return the original input if it is not an array, number, or string', () => {
    expect(countSort({ key1: 1, key2: 2, key3: 3 })).to.eql({ key1: 1, key2: 2, key3: 3 });
    expect(countSort(true)).to.eql(true);
  });
});
