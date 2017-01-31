const expect = require('expect.js');
const getOnes = require('../algos/all-bin-strings-no-consecutive-1s.js');


describe('get no consectutive 1s binary', () => {
  it('should be a function', () => {
    expect(getOnes).to.be.a('function');
  });

  it('should return an array of binary strings', () => {
    expect(getOnes(2).sort()).to.eql(['00', '01', '10'].sort());
  });
});
