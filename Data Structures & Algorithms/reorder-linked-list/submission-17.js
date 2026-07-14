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
     * @return {void}
     */
    // [2,4,6,8]


    // [2,4] [6,8]
    reorderList(head) {
        const nodes = [];

        let curr = head;

        while (curr !== null) {
            nodes.push(curr);
            curr = curr.next;
        }

        let l = 0;
        let r = nodes.length - 1;

        while (l < r) {
            nodes[l].next = nodes[r];
            l++;
            nodes[r].next = nodes[l];
            r--;
        }
        nodes[l].next = null;
    }
}
