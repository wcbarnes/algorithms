const expect = require('expect.js');
const bubbleSort = require('../algos/bubble-sort.js');


describe('BubbleSort should sort the array', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });
});
