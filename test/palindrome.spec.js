const expect = require('expect.js');
const palindrome = require('../algos/palindrome.js');


describe('palindrome', () => {
  it('should be a function', () => {
    expect(palindrome).to.be.a('function');
  });
});

