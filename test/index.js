const assert = require('chai').assert;
const {
  __,
  prop,
  path
} = require('ramda');
const { generatePlayer } = require('../index.js');

describe('index.js', () => {
  describe('Function generatePlayer()', () => {
    it('Must return object', () => {
      assert.isObject(generatePlayer());
    });
    it('Check player props', () => {
      const player = generatePlayer();
      const p = prop(__, player);
      const q = path(__, player);

      assert.isString(p('id'));
      assert.isString(p('name'));
      assert.isNumber(p('height'));
      assert.isObject(p('charact'));
      assert.isNumber(q(['charact', 'ft']));
      assert.isNumber(q(['charact', 'twoPts']));
      assert.isNumber(q(['charact', 'threePts']));
    });
  });
});
