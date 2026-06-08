/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    // 0->[1,2,3,4], n = 2
    //       s   f
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy;

        while (n >= 0) {
            fast = fast.next;
            n--;
        }

        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return dummy.next;
    }
}
