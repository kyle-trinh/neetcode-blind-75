const { runTests } = require('../utils');
const { groupAnagramsNaive, groupAnagrams } = require('./groupAnagrams');

const testCases = [
  {
    title:
      '(["eat","tea","tan","ate","nat","bat"]) -> [["bat"],["nat","tan"],["ate","eat","tea"]]',
    input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
  },
  {
    title: '([""]) -> [[""]]',
    input: [['']],
    output: [['']],
  },
  {
    title: '(["a"]) -> [["a"]]',
    input: [['a']],
    output: [['a']],
  },
];

runTests(testCases, groupAnagramsNaive);
runTests(testCases, groupAnagrams);
