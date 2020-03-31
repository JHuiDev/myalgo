class ArrayQueue {
    constructor(n) {
        n++;
        this.items = new Array(n);
        this.head = 0;
        this.tail = 0;
        this.capacity = n;
    };
    enqueue(value) {
        if ((this.tail + 1) % this.capacity == this.head) console.log(123);
        this.items[this.tail] = value;
        this.tail = (this.tail + 1) % this.capacity;
    };
    dequeue() {
        if (this.head == this.tail) return false;
        this.tmp = this.items[this.head]
        this.items[this.head] = null;
        this.head = (this.head + 1) % this.capacity;
        return this.tmp;
    };


}

var Queue = new ArrayQueue(3);

Queue.enqueue(1);

Queue.enqueue(2);