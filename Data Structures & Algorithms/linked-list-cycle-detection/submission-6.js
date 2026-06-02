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
        const nodes = new Set();
        let curr = head;

        while (curr) {
            if (nodes.has(curr)) return true;
            nodes.add(curr);
            curr = curr.next;
        }
        
        return false;
    }
}
