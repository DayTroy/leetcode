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
        const nodes = [];

        let curr = head;
        while (curr) {
            nodes.push(curr);
            curr = curr.next;
        }

        const removeIndex = nodes.length - n;

        if (removeIndex === 0) return head.next;

        nodes[removeIndex - 1].next = nodes[removeIndex].next;
        nodes[removeIndex].next = null;

        return head;

    }
}
