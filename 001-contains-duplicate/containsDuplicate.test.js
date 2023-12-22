const { runTests } = require('../utils');
const containsDuplicate = require('./containsDuplicate');

const tests = [
  {
    title: '[1, 2, 3, 1] -> true',
    input: [[1, 2, 3, 1]],
    output: true,
  },
  {
    title: '[1, 2, 3, 4] -> false',
    input: [[1, 2, 3, 4]],
    output: false,
  },
  {
    title: '[1, 1, 1, 3, 3, 4, 3, 2, 4, 2] -> true',
    input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
    output: true,
  },
];

runTests(tests, containsDuplicate);
