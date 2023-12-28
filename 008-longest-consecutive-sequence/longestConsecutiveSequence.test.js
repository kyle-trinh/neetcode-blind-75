const { runTests } = require('../utils');
const longestConsecutive = require('./longestConsecutiveSequence');

const testCases = [
  {
    title: '([100,4,200,1,3,2]) -> 4',
    input: [[100, 4, 200, 1, 3, 2]],
    output: 4,
  },
  {
    title: '([0,3,7,2,5,8,4,6,0,1]) -> 9',
    input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
    output: 9,
  },
];

runTests(testCases, longestConsecutive);
