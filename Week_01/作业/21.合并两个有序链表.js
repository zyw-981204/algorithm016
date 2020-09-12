/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 法1 迭代
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null
    if (!l1 || !l2) return l1 ? l1 : l2
    let newHead = new ListNode(null),
        cur = newHead
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = l2
            l2 = l2.next
        } else {
            cur.next = l1
            l1 = l1.next
        }
        cur = cur.next
    }
    cur.next = l1 ? l1 : l2
    return newHead.next
};
// 法二递归
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
};
// @lc code=end