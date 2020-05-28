class Heap {
    constructor(capacity) {
        this.heapArr = new Array(capacity + 1);
        this.size = capacity;
        this.length = 0;
    };
    /**
     * 
     * @param {*} data need insert data
     * At firsh data well insert heap tail,after contrast father node min or max ,if max will them swap. 
     */
    insert(data) {
        if (this.length >= this.size)
            return -1;
        ++this.length;
        this.heapArr[this.length] = data;
        // 堆化處理
        let i = this.length;
        while (i / 2 > 0 && this.heapArr[i] > this.heapArr[Math.floor(i / 2)]) {
            this.swap(this.heapArr, i, Math.floor(i / 2));
            i = Math.floor(i / 2);
        }
    };
    /**
     * 刪除最頂部的數據
     * 刪除使用最末尾的數據覆蓋最頂部的數據。再進行堆化
     */
    remove() {
        if (this.length == 0) return -1;
        this.heapArr[1] = this.heapArr[this.length];
        this.heapArr[this.length] = null;
        --this.length;
        this.heapify(this.heapArr, this.length, 1);
    };
    /**
     * 位置交換操作
     * @param {*} arr 
     * @param {*} pos1 
     * @param {*} pos2 
     */
    swap(arr, pos1, pos2) {
        [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
    };
    get() {
        return this.heapArr[1];
    };
    /**
     * 堆化操作
     * @param {*} a 數組
     * @param {*} n 數組長度
     * @param {*} i 數字索引
     */
    heapify(a, n, i) {
        while (true) {
            let maxPos = i; //父節點
            // 小於左子元素
            if (i * 2 < n && a[i] < a[i * 2]) maxPos = i * 2;
            // 小於右子元素
            if (i * 2 < n && a[i] < a[i * 2 + 1]) maxPos = i * 2 + 1;
            // 頂部的元素已經是最大值
            if (maxPos == i) break;

            // 交換位置
            this.swap(a, i, maxPos);
            // 讓i指向較大的位置
            i = maxPos;
        }
    };
    /**
     * 建堆操作
     * @param {*} arr 數組
     * @param {*} n 數組長度
     */
    buildHeap(arr, n) {
        // i--獲取的是兄弟節點，也就是從子葉節點的父節點開始遍歷
        for (let i = n / 2; i >= 1; i--) {
            this.heapify(arr, n, i);
        }
    };
    /**
     * 堆排序
     * 將最頂部的值交換到最尾部，通過堆化選出最大值重複步驟
     * @param {*} arr 數組長度
     */
    sort(arr) {
        let n = arr.length - 1;
        this.buildHeap(arr, n);
        let k = n;
        while (k > 1) {
            this.swap(arr, 1, k);
            --k;
            this.heapify(arr, k, 1);
        }
        return arr;
    }
}


let heap = new Heap(5);
heap.insert(3);
heap.insert(7);
heap.insert(1);
heap.insert(9);
heap.insert(100);
heap.remove();
console.log(heap.sort([2, 31, 4, 12, 5, 4]));
console.log(heap.get());