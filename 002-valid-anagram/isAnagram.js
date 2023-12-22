/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:

    Input: s = "rat", t = "car"
    Output: false
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sCharsCount = {};
  for (let i = 0; i < s.length; i++) {
    if (sCharsCount[s[i]] === undefined) {
      sCharsCount[s[i]] = 1;
    } else {
      sCharsCount[s[i]] += 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!sCharsCount[t[i]]) {
      return false;
    }

    sCharsCount[t[i]] -= 1;
  }

  return true;
};

module.exports = isAnagram;
