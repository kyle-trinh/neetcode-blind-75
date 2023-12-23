const { runTests } = require('../utils');
const twoSum = require('./twoSum');

const testCases = [
  {
    title: '([2, 7, 11, 15], 9) -> [0, 1]',
    input: [[2, 7, 11, 15], 9],
    output: [0, 1],
  },
  {
    title: '([3, 2, 4], 6) -> [1, 2]',
    input: [[3, 2, 4], 6],
    output: [1, 2],
  },
  {
    title: '([3, 3], 6) -> [0, 1]',
    input: [[3, 3], 6],
    output: [0, 1],
  },
];

runTests(testCases, twoSum);
