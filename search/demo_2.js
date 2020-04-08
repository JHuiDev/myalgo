/**
 * 二分查找查找相同的值中的最后一位
 * @param {Array} arr 
 * @param {index} n 
 * @param {value} value 
 */
function bsearch(arr, n, value) {
    let low = 0,
        high = n - 1,
        mid;
    while (high >= low) {
        mid = low + ((high - low) >> 1);
        if (arr[mid] > value) {
            high = mid - 1;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else {
            //如果区间中间值已经是最后一个元素，那么它一定就是我们要找的值了
            //如果区间中间值的后一个元素已经不是我们要找的值了那么当前的值就是我们要找的元素下标
            if ((mid == n - 1) || (arr[mid + 1] != value))
                return mid;
            else
                low = mid + 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 9, 10];
console.log(bsearch(arr, arr.length, 8))