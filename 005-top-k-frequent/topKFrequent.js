/**
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    Example 2:

    Input: nums = [1], k = 1
    Output: [1]
    

    Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.
    

    Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
function topKFrequent(nums, k) {
  const numFrequency = {};
  const buckets = Array.from({ length: nums.length });
  const result = [];

  nums.forEach((num) => {
    numFrequency[num] = numFrequency[num] ? numFrequency[num] + 1 : 1;
  });

  Object.entries(numFrequency).forEach((entry) => {
    const [num, frequency] = entry;
    if (buckets[frequency - 1]) {
      buckets[frequency - 1].push(num);
    } else {
      buckets[frequency - 1] = [num];
    }
  });

  let i = nums.length - 1;
  let j = k;

  while (i >= 0 && j > 0) {
    if (buckets[i] !== undefined) {
      result.push(...buckets[i].map((el) => parseInt(el)));
      j = j - buckets[i].length;
    }
    i--;
  }

  return result;
}

module.exports = topKFrequent;
