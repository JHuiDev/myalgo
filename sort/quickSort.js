var rondam = require('./randomArray');

function quickSort(arr, n) {
    quickSort_part(arr, 0, n - 1);
    return arr;
};

function quickSort_part(arr, p, r) {
    if (p >= r) return;
    let q = partition(arr, p, r);
    quickSort_part(arr, p, q - 1);
    quickSort_part(arr, p + 1, r);
};

function partition(arr, p, r) {
    let pivot = r,
        i = p;
    for (let j = p; j < r; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
};
console.log(rondam.array.length)
console.log(quickSort(rondam.array, rondam.array.length));