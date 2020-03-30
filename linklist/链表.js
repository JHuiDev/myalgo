class Node {
    constructor(value) {
        this.value = value;
        this.pre = null;
        this.next = null;
    }
}
class LinkList {
    constructor() {
        this.head = new Node(null);
        this.point;
        this.add = this.head;
        this.status;
        this.lenght = 0;
    };
    /**
     * 添加节点
     * @param {Node} node 
     */
    addNode(node) {
        while (this.add.next != null) {
            this.add = this.add.next;
        }
        this.add.next = node;
        node.pre = this.add;
        this.lenght++;
        return node;
    };
    /**
     * 打印
     */
    print() {
        this.point = this.head;
        let arr = [];
        while (this.point.next != null) {
            this.point = this.point.next;
            arr.push(this.point.value);
        }
        return arr;
    };
    /**
     * 按值查找
     * @param {*} value 
     */
    find(value) {
        this.point = this.head;
        while (this.point.next != null) {
            this.point = this.point.next;
            if (this.point.value === value) {
                return this.point;
            }
        }
        return -1;
    };
    // 在节点前面插入
    insert(node, value) {
        if ((this.point = this.find(value)) != -1) {
            node.next = this.point;
            node.pre = this.point.pre
            this.point.pre.next = node;
            this.point.pre = node;
            this.status = this.node;

            this.lenght++;
        } else {
            this.status = -1;
        }
        return this.status;
    };
    //在节点后面插入
    append(node, value) {
        if ((this.point = this.find(value)) != -1) {
            node.next = this.point.next;
            node.pre = this.point;
            if (this.point.next && this.point.pre) {
                this.point.next.pre = node
            };
            this.point.next = node;
            this.status = this.node;

            this.lenght++;
        } else {
            this.status = -1;
        }
        return this.status;
    };
    remove(value) {
        if ((this.point = this.find(value)) != -1) {
            this.point.pre.next = this.point.next;
            if (this.point.next) {
                this.point.next.pre = this.point.pre;
            }
            this.point = null;
            this.status = 1;
            this.lenght--;
        } else {
            this.status = -1;
        }
        return this.status;
    };
    modifiy(lastValue, newValue = null) {
        if ((this.point = this.find(lastValue)) != -1) {
            this.point.value = newValue;
            this.status = 1;
        } else {
            this.status = -1
        }
        return this.status;
    };
    /**
     * 反序
     */
    reversList() {
        this.point = this.head.next;
        if (this.point == null || this.point.next == null)
            return -1
        this.pointNext = this.point.next;
        // 解除point和pointNext的前后关系
        this.point.next = null;
        this.pointNext.pre = null;
        while (this.pointNext != null) {
            this.head.next = this.pointNext;
            this.point.pre = this.pointNext;
            this.tmp = this.pointNext.next;
            this.pointNext.pre = this.head;
            this.pointNext.next = this.point;
            this.point = this.pointNext;
            this.pointNext = this.tmp;
        }
        return 1
    };
    /**
     * 查找倒数第n个节点
     * @param {int} index 索引下标
     */
    reciprocal(index) {
        [this.before, this.after] = [this.head.next, this.head.next];
        while (index > 1) {
            this.before = this.before.next;
            index--;
        }
        while (this.before.next != null) {
            this.before = this.before.next;
            this.after = this.after.next;
        }
        return this.after;
    };
    /**
     *获取链表中间节点
     */
    findMiddle() {
            [this.before, this.after] = [this.head.next, this.head.next];
            while (this.before.next != null && this.before.next.next != null) {
                this.after = this.after.next;
                this.before = this.before.next.next;
            }
            return this.after;
        }
        /**
         * 中环检测
         */
    hasLoop() {
        [this.before, this.after] = [this.head.next, this.head.next];
        while (this.before.next != null && this.before.next.next != null) {
            this.after = this.after.next;
            this.before = this.before.next.next;
            if (this.before == this.after) {
                return true;
            }
        }
        return false;
    };
    /**
     * 合并两个有序链表链表
     * 主链表和副链表进行比较，若结果副列表比较小则将该节点插入主链表指针所指向的前面，副链表指针向后移动一位。若比较结果为大于，住链表向后移动一位。重复比较。
     * @param {LinkList} linkList 
     */
    LinkMerge(linkList) {
        this.master = this.head.next;
        this.branch = linkList.head.next;
        while (this.branch != null && this.master != null) {
            if (this.branch.value <= this.master.value) {
                this.tmp = this.branch.next;
                this.branch.pre = this.master.pre;
                this.branch.next = this.master;
                this.master.pre.next = this.branch;
                this.master.pre = this.branch;
                this.branch = this.tmp;
            } else {
                if (this.master.next != null) {
                    this.master = this.master.next;
                } else {
                    this.master.next = this.branch;
                    this.branch.pre = this.master;
                    return true;
                }
            }
        }

    }
}