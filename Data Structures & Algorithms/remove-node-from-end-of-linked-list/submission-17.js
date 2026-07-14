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
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let front = dummy;
        let back = dummy;

        for (let i = 0; i <= n; i++) {
            back = back.next;
        }

        while (back) {
            front = front.next;
            back = back.next;
        }

        front.next = front.next.next;

        return dummy.next;
    }
}
