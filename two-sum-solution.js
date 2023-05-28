/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // Iterate through the remaining elements
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the current pair adds up to the target
      if (nums[i] + nums[j] === target) {
        // Return the indices as an array
        return [i, j];
      }
    }
  }

  // If no solution is found, return an empty array
  return [];
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
