/**
    Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

    Please implement encode and decode
 */
function encode(strs) {
  let result = '';

  strs.forEach((str) => {
    result = `${result}${str.length}#${str}`;
  });

  return result;
}

function decode(str) {
  const result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    // Now j is index = "#"
    while (str[j] !== '#') {
      j++;
    }
    const wordLength = parseInt(str[j - 1]);
    const word = str.slice(j + 1, wordLength + j + 1);
    result.push(word);
    i = j + wordLength + 1;
  }

  return result;
}

module.exports = {
  encode,
  decode,
};
