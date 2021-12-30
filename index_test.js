const assert = require('assert');
const roster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => { 
    it('returns a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.equal(actual, expected);
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', ()=> {
      //setup
      const input = 12;
      const expected = '12';

      // exercise
      const actual = Rooster.timeAtDawn(input);

      //verify
      assert.strictEqual(actual, expected);
    })
    it('throws a range error if passed a number less tham 0', () => {
      // setup
      const inputNumber = -1;
      const expected = RangeError;

      // verify
      assert.throws(()=> {Rooster.timeAtDawn(inputNumber);}, expected);
    })
    
    it('throws an error if passed a number greater than 23', () => {
      //setup
      const inputNumber = 26;
      const expected = RangeError;

      // verify
       assert.throws(()=> {Rooster.timeAtDawn(inputNumber);}, expected);
    })
  })
})