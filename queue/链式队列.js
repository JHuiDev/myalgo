class LinkNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkQueue {
    constructor(n) {
        this.head = null;
        this.tail = null;
        this.capacity = n;
        this.createQueue()
    }
    createQueue() {
        let n = this.capacity;
        this.head = new LinkNode(null);
        this.tail = this.head;
        this.head.id = i;
        n--;
        while (n >= 0) {
            i =
                this.tail.next = new LinkNode(null);
            this.tail = this.tail.next;
            n--;
        }
        this.tail.next = this.head;
        this.tail = this.head;
        this.tail.next = this.head.next;
    }
    enqueue(value) {
        if (this.tail.next === this.head) {
            console.log(this.tail)
            return false
        };
        this.tail.value = value;
        this.tail = this.tail.next;

    };
    dequeue() {
        if (this.head == this.tail) return false
        let value = this.head.value;
        this.head.value = null;
        this.head = this.head.next;
        return value;
    };
};
var linkqueue = new LinkQueue(5);