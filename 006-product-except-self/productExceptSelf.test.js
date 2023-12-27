const { runTests } = require('../utils');
const productExceptSelf = require('./productExceptSelf');

const testCases = [
  {
    title: '([1, 2, 3, 4]) -> [24, 12, 8, 6]',
    input: [[1, 2, 3, 4]],
    output: [24, 12, 8, 6],
  },
  {
    title: '([-1, 1, 0, -3, 3]) -> [0, 0, 9, 0, 0]',
    input: [[-1, 1, 0, -3, 3]],
    output: [-0, 0, 9, -0, 0],
  },
];

runTests(testCases, productExceptSelf);
