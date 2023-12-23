const isAnagram = require('../002-valid-anagram/isAnagram');

/**
   Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Example 2:

    Input: strs = [""]
    Output: [[""]]
    Example 3:

    Input: strs = ["a"]
    Output: [["a"]]
 */
function groupAnagramsNaive(strs) {
  const result = [];
  const added = {};

  for (let i = 0; i < strs.length; i++) {
    if (added[i]) continue;
    const currentGroup = [];
    currentGroup.push(strs[i]);
    added[i] = true;
    for (let j = i + 1; j < strs.length; j++) {
      if (added[j]) continue;
      if (isAnagram(strs[i], strs[j])) {
        currentGroup.push(strs[j]);
        added[j] = true;
      }
    }
    result.push(currentGroup);
  }

  return result;
}

function groupAnagrams(strs) {
  const cache = {};

  strs.forEach((str) => {
    const charsCount = Array.from({ length: 26 }).map(() => 0);

    for (let i = 0; i < str.length; i++) {
      const currentCharCode = str.charCodeAt(i) - 'a'.charCodeAt(0);
      charsCount[currentCharCode] += 1;
    }

    if (cache[charsCount]) {
      cache[charsCount].push(str);
    } else {
      cache[charsCount] = [str];
    }
  });

  return Object.values(cache);
}

module.exports = { groupAnagramsNaive, groupAnagrams };
