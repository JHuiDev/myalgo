const MAX_LEVEL = 16;
class Node {
    constructor({
        data = -1,
        MaxLevel = 0,
        refer = new Array(MAX_LEVEL)
    } = {}) {
        this.data = data;
        this.MaxLevel = MaxLevel;
        this.refer = refer;
    }
}
class SkipList {
    head = new Node();
    //级数总和
    levelCount = 1;
    constructor() {}
    static randomLevel() {
        let level = 1;
        for (let i = 1; i < MAX_LEVEL; i++) {
            if (Math.random() < 0.5) {
                level++;
            }
        }
        return level;
    }

    insert(value) {
        const newNode = new Node();

        const level = SkipList.randomLevel();
        newNode.data = value;
        newNode.MaxLevel = level;

        let p = this.head;

        const upDate = Array(level).fill(new Node());
        for (let i = level - 1; i >= 0; i--) {
            while (p.refer[i] !== undefined && p.refer[i].data < value) {
                p = p.refer[i];
            }

            upDate[i] = p;
        };
        for (let i = level - 1; i >= 0; i--) {
            newNode.refer[i] = upDate[i].refer[i];
            upDate[i].refer[i] = newNode;
        }
        if (this.levelCount < level) {
            this.levelCount = level;
        }

    }
    find(value) {
        if (!value) { return null };
        let p = this.head;
        for (let i = this.levelCount - 1; i >= 0; i--) {
            while (p.refer[i] !== undefined && p.refer[i].data < value) {
                p = p.refer[i];
            }
        }
        if (p.refer[0] !== undefined && p.refer[0].data === value) {
            return p.refer[0];
        }
        return null;
    }
    remove(value) {
        let _node;
        let p = this.head;
        const upDate = new Array(new Node());

        for (let i = this.levelCount - 1; i >= 0; i--) {
            while (p.refer[i] !== undefined && p.refer[i].data < value)
                p = p.refer[i];
            upDate[i] = p;
        }

        if (p.refer[0] !== undefined && p.refer[0].data == value) {
            _node = p.refer[0];
            for (let i = 0; i <= this.levelCount - 1; i++) {
                if (upDate[i].refer[i] !== undefined && upDate[i].refer[i].data == value) {

                    upDate[i].refer[i] = upDate[i].refer[i].refer[i];
                }
            }
            return _node;
        }
        return null;
    }
    print() {
        let p = this.head;
        while (p.refer[0] !== undefined) {
            console.log(p.refer[0].data);
            p = p.refer[0];
        }
    }
}

var skiplist = new SkipList();

function test() {
    let i = 10000;
    let j = 1;
    for (; j <= 10; j++) {
        skiplist.insert(j);
    }
    console.log("=========插入10个元素=========");
    skiplist.print();

    for (j = 10; j > 0; j--) {
        if (j % 2 == 0)
            skiplist.remove(j);

    }
    console.log("=========删除偶数位=========");
    skiplist.print();
    for (j = 10; j > 0; j--) {
        if (j % 2 == 1) {
            skiplist.remove(j);
        }
    }
    console.log("=========删除奇数位=========");
    skiplist.print();

    console.time('插入 10000：');
    for (; j < i; j++) {
        skiplist.insert(j);
    }
    console.timeEnd('插入 10000：');

    console.time('search 100000');
    for (let j = 0; j < 100000; j++) {
        let key = Math.floor(Math.random() * i + 1);
        skiplist.find(key);
    }
    console.timeEnd('search 100000');
}
test();