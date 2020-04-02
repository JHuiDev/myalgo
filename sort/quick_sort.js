var rondam = require('./randomArray');

function quick_sort(arr, n) {
    quick_sort_part(arr, 0, n - 1);
    return arr;
}
/**
 * 快速排序
 * @param {Array} arr 
 * @param {indexMin} low 
 * @param {indexMax} high 
 */
function quick_sort_part(arr, low, high) {
    if (low >= high) return;
    let mid = partition(arr, low, high);
    quick_sort_part(arr, low, mid - 1);
    quick_sort_part(arr, mid + 1, high);
}

function partition(arr, low, high) {
    //将中值选为最后一个元素；
    let pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            //通过交换位置的方式来阻止数组的搬移操作
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    //结束后将数组arr[high]的值放到它的位置上
    [arr[i], arr[high]] = [arr[high], arr[i]];
    // 返回中间位置
    return i;
}