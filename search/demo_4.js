/**
 * 二分查找最后一个小于等于查找值的元素
 * 实现原理：在所有小于等于给定值的区间中进行判断，当low始终都不会离开这个区间，而是离小于等于第一个给定值越来越近。
 * 判断mid的下一个元素是否大于了给定值，如果是，则当前mid所在的值就是第一个小于等于给定值的值。
 * @param {Array} arr 
 * @param {length} n 
 * @param {value} value 
 */
function bsearch(arr, n, value) {
    let low = 0,
        high = n - 1,
        mid;
    while (high >= low) {
        mid = low + ((high - low) >> 1);
        if (arr[mid] <= value) {
            if ((mid == n - 1) || (arr[mid + 1] > value))
                return mid;
            else
                low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}


let arr = [1, 2, 3, 4, 6, 7, 7, 9, 10];
console.log(arr[bsearch(arr, arr.length, 9)]);