/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const noDoble = new Set(nums).size;
  const condition = nums.length === noDoble ? false : true;

  return condition;
}

containsDuplicate([1, 2, 3, 1]);
