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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            const l1v = l1 ? l1.val : 0;
            const l2v = l2 ? l2.val : 0;
            let val = l1v + l2v + carry;

            carry = Math.floor(val / 10);
            val = val % 10;

            curr.next = new ListNode(val);
            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}
