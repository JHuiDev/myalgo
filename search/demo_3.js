/**
 * 二分查找，查找第一大于等于所查找的值
 * @param {Array} arr 
 * @param {Length} n 
 * @param {Value} value 
 */
function bsearch(arr, n, value) {
    let low = 0,
        high = n - 1,
        mid;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        if (arr[mid] >= value) {
            if ((mid == 0) || (arr[mid - 1] < value)) return mid;
            else high = mid - 1;
        } else { low = mid + 1; }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 6, 7, 7, 8, 8, 9, 10];
console.log(arr[bsearch(arr, arr.length, 5)])