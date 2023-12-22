const runTests = (testCases, fn) => {
  testCases.forEach(({ title, input, output }) => {
    test(title, () => {
      expect(fn(...input)).toBe(output);
    });
  });
};

module.exports = {
  runTests,
};
