function mergeSort(arr, n) {
    mergeSort_(arr, 0, n - 1);
}

function mergeSort_part(arr, p, r) {
    if (p >= r) return;
    let q = (r + p) / 2;
    mergeSort_part(arr, p, q);
    mergeSort_part(arr, q + 1, r);

}

function merge(arr, p, r) {
    let q = (r + p) / 2;
    let temp = new Array(arr.length);
    while (p <= q && r <= q) {
        if (arr[p] < arr[r]) {
            temp[i] = arr[p++];
        } else {
            temp[j] = arr[r++];
        }
    };

}
let arr = [12, 3, 14, 12, 31, 41, 23, 44, 14, 11]
mergeSort(arr);