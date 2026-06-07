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
        let check = new Set();

        while (curr) {
            if (check.has(curr)) return true;
            check.add(curr);
            curr = curr.next;
        }

        return false;
    }
}
