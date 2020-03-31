/**
 * 插入排序
 * 排序算法将数组分类有序和无序两部分，每次都取一个无序的数组往有序的数组中寻找自己的位置
 * 插入排序是稳定的排序算法
 * @param {Array} arr 
 */
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        let value = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            if (value < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        console.log(j);
        //j结束的是时候还会做一次减减的操作
        arr[j + 1] = value;
    }
    return arr
}

let arr = [333, 24, 123, 234, 1, 51, 32, 12, 34];
console.log(insertSort(arr));