class ArrayQueue {
    constructor(n) {
        this.items = new Array(n);
        this.head = 0;
        this.tail = 0;
        this.capacity = n;
    };
    enqueue(value) {
        console.log(this.tail)
        if (this.capacity == this.tail) {
            if (this.head == 0) this.dilatation();
            for (let i = 0; i < this.items.length; i++) {
                this.items[i] = this.items[this.head + i];
            }
            this.tail -= this.head;
            this.head = 0;
        }
        this.items[this.tail] = value;
        this.tail++;
    };
    dequeue() {
        this.tmp = this.items[this.head]
        this.items[this.head] = null;
        this.head++;
        return this.tmp;
    };

    dilatation() {
        let tmp = new Array(this.capacity * 2);
        let len = this.items.length;
        for (let i = 0; i < this.len; i++) {
            tmp[i] = this.items[i];
        }
    };
}

var Queue = new ArrayQueue(3);