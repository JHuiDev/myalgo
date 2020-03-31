/**
 * 选择排序
 * 通过找到最小值与前面的值交换
 * 选择排序不是稳定排序，因为在元素交换的时候会破坏原来的顺序
 * @param {Array} arr 
 */
function chooseSort(arr) {
    for (var i = 0; i < 8; i++) {
        let minIndex = i;
        for (var j = i + 1; j < 8; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let arr = [12, 3, 141, 21, 23, 124, 1, 23];

console.log(chooseSort(arr));