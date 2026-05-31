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
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head;
        const check = new Map();

        while (curr != null) {
            check.set(curr, 0);

            if (check.has(curr.next)) return true;
            
            curr = curr.next;
        }

        return false;
    }
}
