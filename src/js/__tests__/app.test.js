/* eslint-disable import/extensions */
import validate from '../validate.js';

test.each([
  ['true for valid', '5555555555554444', [true, 'master']],
  ['false for invalid', '5555555555554443', [false, '']],
  ['true for valid', '4111111111111111', [true, 'visa']],
  ['true for valid', '371449635398431', [true, 'amex']],
  ['true for valid', '2200770212727079', [true, 'mir']],
  ['true for valid', '6011111111111117', [true, 'discover']],
])(('it should be %s'), (_, input, expected) => {
  expect(validate(input)).toEqual(expect.arrayContaining(expected));
});
