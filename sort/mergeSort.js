function mergeSort(arr, n) {
    mergeSort_part(arr, 0, n - 1);
    return arr;
}

function mergeSort_part(arr, p, r) {

    if (p >= r) return;
    let q = Math.floor((r + p) / 2);
    mergeSort_part(arr, p, q);
    mergeSort_part(arr, q + 1, r);
    merge(arr, p, r);
}

function merge(arr, p, r) {
    let q = Math.floor((r + p) / 2);
    // console.log(p, q, r);
    // return;
    let i = p,
        j = q + 1,
        k = 0 // 初始化变量i, j, k
    let temp = new Array(r);
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

    for (let i = 0; i < r - p; i++) {
        arr[p + i] = temp[i];
    }
}
let arr = [12, 3, 14, 12, 31, 41, 23, 44]
console.log(mergeSort(arr, 8));