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
    // [2,4,6,8,10]
    // sf
    //   s f
    //     s.  f
    // [2, 4, 6]   [10, 8]
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr = slow.next;
        let prev = null;
        slow.next = null;

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let list1 = head;
        let list2 = prev;

        while (list2) {
            const next1 = list1.next;
            const next2 = list2.next;

            list1.next = list2;
            list2.next = next1;

            list1 = next1;
            list2 = next2;
        }

        return head;
    }
}
