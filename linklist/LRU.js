class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    if (!(this instanceof LRUCache)) {
        return new LRUCache(capacity);
    }
    this.capacity = capacity;
    this.currSize = 0;
    this.cache = {};
    this.head = new Node("header");
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache[key] == undefined) return -1;
    this.cache[key].next = this.head.next;
    this.cache[key].pre = this.head;
    this.head.next = this.cache[key];
    return this.cache[key].value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    // 插入
    if (this.cache[key] == undefined) {
        this.cache[key] = new Node(value);
        this.currSize++;
    } else {
        // 更新
        this.tail = this.cache[key].pre;
        this.cache[key].pre.next = null;
        this.cache[key].value = value;
    }
    // 插入header之後
    if (this.head.next != undefined) {
        this.head.next.pre = this.cache[key];
    } else {
        this.tail = this.cache[key];
    }
    this.cache[key].next = this.head.next;
    this.head.next = this.cache[key];
    this.cache[key].pre = this.head;


    //淘汰末尾
    if (this.currSize > this.capacity) {
        // tail想前近一個結點
        this.tail = this.tail.pre;
        this.tail.next.pre = null;
        this.tail.next = null;
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



let LRU = new LRUCache(2);
LRU.put(1, 1);

LRU.put(2, 2);