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
     * @return {ListNode}
     */
    // 1)
    // curr = 0
    // next = 1
    // 0 -> null
    // prev = 0;
    // curr = 1

    // 2)
    // curr = 1
    // next = 2
    // 1 -> 0
    // prev = 1;
    // curr = 2

    // 3)
    // curr = 2
    // next = 3
    // 2 -> 1
    // prev = 2;
    // curr = 3

    // 4)
    // curr = 3
    // next = null
    // 3 -> 2
    // prev = 3;
    // curr = null

    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev
    }
}
