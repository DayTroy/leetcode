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
    // [0, 1, 2, 3, 4, 5, 6]
    // 
    reorderList(head) {
        const nodes = [];
        let curr = head;

        while (curr) {
            nodes.push(curr);
            curr = curr.next;
        }

        let ans = new ListNode(0);
        let l = 0, r = nodes.length - 1;

        while (l < r) {
            nodes[l].next = nodes[r];
            l++;
            nodes[r].next = nodes[l];
            r--;
        }
        nodes[l].next = null;

        return nodes;
    }
}
