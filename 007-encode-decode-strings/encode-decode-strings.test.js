const { encode, decode } = require('./encode-decode-strings');

test("Encode ['lint', 'code', 'love', 'you']", () => {
  const input = ['lint', 'code', 'love', 'you'];
  const output = ['lint', 'code', 'love', 'you'];

  expect(decode(encode(input))).toEqual(output);
});

test("Encode ['we', 'say', ':', 'yes']", () => {
  const input = ['we', 'say', ':', 'yes'];
  const output = ['we', 'say', ':', 'yes'];

  expect(decode(encode(input))).toEqual(output);
});
