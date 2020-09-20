/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
/**
 * @name hasCycle
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

var hasCycle = (head) => {
  if (!head || !head.next) return false
  let [fast, slow] = [head, head]
  while (fast && fast.next) {
    [fast, slow] = [fast.next.next, slow.next]
    if (fast === slow) return true
  }
  return false
}
// @lc code=end