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

  it('should sort strings without taking a callback', () => {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const reverse = alph.split('').reverse.join('');

    const strInitial = 'Hello, my name is George! It\'s very nice to meet you Georgina!';
    const strExpected = '           !!\',GGHIaaceeeeeeeeeggiiillmmmnnnooooorrrsstttuvyyy';

    expect(countSort(reverse)).to.eql(alph);
    expect(countSort(strInitial)).to.eql(strExpected);
  });

  it('should sort numbers without a callback', () => {
    const num = 123456789;
    const reverse = 987654321;
    expect(countSort(reverse)).to.eql(num);
  });

  it('should sort a very large array', () => {
    const arr = Array.from({ length: 10000000000 }, () => {
      return Math.floor(Math.random() * 100000000);
    });
    expect(countSort(arr)).to.eql(arr.sort((a, b) => a - b));
  });

  it('should return the original input if it is not an array, number, or string', () => {
    expect(countSort({ key1: 1, key2: 2, key3: 3 })).to.eql({ key1: 1, key2: 2, key3: 3 });
    expect(countSort(true)).to.eql(true);
  });
});
