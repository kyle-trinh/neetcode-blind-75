const { runTests } = require('../utils');
const isAnagram = require('./isAnagram');

const testCases = [
  {
    title: '("anagram", "nagaram") -> true',
    input: ['anagram', 'nagaram'],
    output: true,
  },
  {
    title: '("rat", "car") -> false',
    input: ['rat', 'car'],
    output: false,
  },
];

runTests(testCases, isAnagram);
