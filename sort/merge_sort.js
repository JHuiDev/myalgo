/**
 * 归并排序
 * @param {Array} arr 
 * @param {length} n 
 */

function merge_sort(arr, n) {
    part(arr, 0, n - 1);
    return arr;
}
/**
 * 
 * @param {Array} arr 
 * @param {index } head
 * @param {index} tail 
 */
function part(arr, head, tail) {
    if (head >= tail) return;
    let mid = Math.floor((head + tail) / 2)

    part(arr, head, mid);
    part(arr, mid + 1, tail);
    merge(arr, head, mid, tail);
}

function merge(arr, head, mid, tail) {
    console.log(head, mid, tail);
    let i = head,
        j = mid + 1,
        k = 0;

    let array = new Array(tail - head + 1);
    while (i <= mid && j <= tail) {
        if (arr[i] <= arr[j]) {
            array[k++] = arr[i++];
        } else {
            array[k++] = arr[j++];
        }
    }

    let start = i,
        end = mid;
    if (j <= tail) {
        start = j;
        end = tail;
    };
    while (start <= end) {
        array[k++] = arr[start++];
    }

    for (let i = 0; i <= tail - head; i++) {
        arr[i + head] = array[i];
    }
}