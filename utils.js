const runTests = (testCases, fn) => {
  testCases.forEach(({ title, input, output }) => {
    test(title, () => {
      expect(fn(...input)).toEqual(output);
    });
  });
};

module.exports = {
  runTests,
};
