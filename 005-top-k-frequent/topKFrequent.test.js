const { runTests } = require('../utils');
const topKFrequent = require('./topKFrequent');

const testCases = [
  {
    title: '([1, 1, 1, 2, 2, 3], 2) -> [1, 2]',
    input: [[1, 1, 1, 2, 2, 3], 2],
    output: [1, 2],
  },
  {
    title: '([1], 1) -> [1]]',
    input: [[1], 1],
    output: [1],
  },
];

runTests(testCases, topKFrequent);
