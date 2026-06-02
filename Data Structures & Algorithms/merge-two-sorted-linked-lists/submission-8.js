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
        let opp = ans;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                opp.next = list1;
                list1 = list1.next;
            } else {
                opp.next = list2;
                list2 = list2.next;
            }

            opp = opp.next;
        }

        if (list1) {
            opp.next = list1;
        } else {
            opp.next = list2;
        }

        return ans.next;
    }
}
