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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let ans = new ListNode(0);
        let move = ans;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                move.next = list1;
                list1 = list1.next;
            } else {
                move.next = list2;
                list2 = list2.next;
            }
            move = move.next;
        }

        if (list1) {
            move.next = list1;
        }

        if (list2) {
            move.next = list2;
        }

        return ans.next;
    }
}
