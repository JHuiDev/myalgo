/**
 * 二分查找循环数组中的值
 * @param {Array} nums 
 * @param {number} target 
 */
var search = function(nums, target) {
    let low = 0,
        high = nums.length - 1,
        mid;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        if (nums[mid] == target) return mid;
        if (nums[high] > nums[mid]) {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {

                high = mid - 1;

            }
        } else {
            if (nums[mid] > target && target >= nums[low]) {

                high = mid - 1;
            } else {

                low = mid + 1;
            }
        }
    }
    return -1;
};
var nums = [5, 1, 2, 3, 4];
console.log(search(nums, 4));