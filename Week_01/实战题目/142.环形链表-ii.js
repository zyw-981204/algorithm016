/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null
    let [fast, slow] = [head, head]
    while (fast && fast.next) {
        [fast, slow] = [fast.next.next, slow.next]
        if (fast === slow) {
            fast = head
            while (1) {
                if (fast === slow) { return fast }
                [fast, slow] = [fast.next, slow.next]
            }
        }
    }
    return null
};
// @lc code=end