/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
/**
 * @name reverseList
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

const reverseList = (node) => {
  if (!node || !node.next) return node
  let newHead = reverseList(node.next)
  node.next.next = node
  node.next = null
  return newHead
}
// @lc code=end