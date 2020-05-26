class Node {
    constructor(key, value) {
        this.next = null;
        this.pre = null;
        this.value = value;
        this.key = key
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    if (!(this instanceof LRUCache)) {
        return new LRUCache(capacity);
    }
    this.headerSym = Symbol('header');
    this.capacity = capacity;
    this.currSize = 0;
    this.tail = null;
    this.head = new Node(this.headerSym, this.headerSym);
    this.cache = new Map();

};
/**
 * 淘汰尾部节点
 */
LRUCache.prototype.tailNode = function() {
    let key = this.tail.key;
    this.tail = this.tail.pre;
    this.tail.next = null;
    return this.cache.delete(key);
};
LRUCache.prototype.upDateTail = function(currNode, turnNode) {
    if (currNode.next == null && (this.head.next == null || currNode.pre.value != this.headerSym))
        this.tail = turnNode;
};
/**
 * @param {number} key
 * 将被激活的节点移动到头部
 */
LRUCache.prototype.elevateNodeToHead = function(key) {

    let cacheMap = this.cache.get(key);
    // 前驅節點是head 不做操作
    if (cacheMap.pre.value == this.headerSym)
        return;
    // 該節點不是最後一個節點
    if (cacheMap.next != null)
        cacheMap.next.pre = cacheMap.pre;
    cacheMap.pre.next = cacheMap.next;
    this.head.next.pre = cacheMap;
    cacheMap.next = this.head.next;
    this.head.next = cacheMap;
    cacheMap.pre = this.head;
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let cacheMap = this.cache.get(key);

    if (cacheMap == undefined) return -1;
    //判断尾部的key是否于用户输入的key相同
    this.upDateTail(cacheMap, cacheMap.pre);
    this.elevateNodeToHead(key);

    return cacheMap.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let cacheMap = this.cache.get(key);
    // 插入
    if (cacheMap == undefined) {
        this.cache.set(key, new Node(key, value));
        cacheMap = this.cache.get(key);
        this.currSize++;
    } else {
        // 更新
        // 移动活动节点到头部
        cacheMap.value = value;
        this.upDateTail(cacheMap, cacheMap.pre);
        this.elevateNodeToHead(key);
        return;
    }
    // 如果是第一个节点
    if (this.head.next == null) {
        this.upDateTail(cacheMap, cacheMap);
    } else {
        this.head.next.pre = cacheMap;
    }
    cacheMap.next = this.head.next;
    cacheMap.pre = this.head;
    this.head.next = cacheMap;
    //淘汰末尾
    if (this.currSize > this.capacity) {
        if (this.tailNode())
            this.currSize--;
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */