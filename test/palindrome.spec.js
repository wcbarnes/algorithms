const expect = require('expect.js');
const palindrome = require('../algos/palindrome.js');


describe('palindrome', () => {
  it('should be a function', () => {
    expect(palindrome).to.be.a('function');
  });

  it('should return true for a single letter', () => {
    expect(palindrome('a')).to.be(true);
  });

  it('should return false for an empty string', () => {
    expect(palindrome('')).to.be(false);
  });

  it('should return true for a palindrome', () => {
    expect(palindrome('racecar')).to.be(true);
  });

  it('should return false if not a palindrome', () => {
    expect(palindrome('racecara')).to.be(false);
  });

  it('should ignore punctuation and capitals', () => {
    expect(palindrome('Anne, I vote more cars race Rome-to-Vienna')).to.be(true);
  });
});

