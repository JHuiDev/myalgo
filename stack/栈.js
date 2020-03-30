class ArrayStack {
    constructor(n) {
        this.items = new Array(n);
        this.count = 0;
        this.size = n
    };
    /**
     * 入栈
     */
    push(item) {
        if (this.count == this.size)
            this.dilatation()
        this.items[this.count] = item;
        this.count++;
    };

    /**
     * 出栈
     */
    pop() {
        if (this.count == 0)
            return false;
        let item = this.items[this.count - 1];
        this.items[this.count - 1] = null;
        this.count--;
        return item;
    };
    dilatation() {
        let copy = new Array(Math.ceil(this.items.length * 0.5));
        this.items = this.items.concat(copy);
    };
}

var stack = new ArrayStack(3);
stack.push(1)
stack.push(2)
stack.push(3)

stack.push(1)
stack.push(2)
stack.push(3)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())