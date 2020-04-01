var array = require('./randomArray');


function mergeSort(arr, n) {
    mergeSort_part(arr, 0, n - 1);
    return arr;
}
var count = 0;

function mergeSort_part(arr, p, r, pos) {
    count++;
    if (p >= r) return;
    let q = Math.floor((r + p) / 2);
    mergeSort_part(arr, p, q, "left");
    mergeSort_part(arr, q + 1, r, "right");
    merge(arr, p, r);
}

function merge(arr, p, r) {
    let q = Math.floor((r + p) / 2);

    let i = p,
        j = q + 1,
        k = 0 // 初始化变量i, j, k
    let temp = new Array(r - p + 1);
    while (i <= q && j <= r) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    };
    let start = i,
        end = q;
    if (j <= r) {
        start = j;
        end = r;
    };
    while (start <= end) {
        temp[k++] = arr[start++];
    }

    for (let i = 0; i <= r - p; i++) {
        arr[p + i] = temp[i];
    }
}

let arr = array.randomArray(10000);
console.time();
mergeSort(arr, arr.length);
console.timeEnd();
console.log(count);