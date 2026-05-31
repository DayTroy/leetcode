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
        const check = new Map();
        let curr = head;

        while (curr != null) {
            if (check.has(curr)) return true;

            check.set(curr, 0);
            
            curr = curr.next;
        }

        return false;
    }
}
