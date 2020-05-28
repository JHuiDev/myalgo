/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let gather = [],
        head = null,
        point = null;
    head = new ListNode(new Symbol("head"));
    point = head;
    while (lists.length > 0) {
        for (list of lists) {
            gather.push(list.val);
        };
        let max = Math.max(...gather);
        let index = gather.indexOf(max);
        if (lists[index] != null) {
            point.next = lists[index];
            gather[index] = lists[index].val;
            lists[index] = lists[index].next;
            point = point.next;
            point.next = null;
        } else {
            lists.splice(index, 1);
            gather.splice(index, 1);
        }
    }
    return head.next;
};