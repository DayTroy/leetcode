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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        while (lists.length > 1) {
            const merged = [];
            for (let i = 0; i < lists.length; i += 2) {
                const list1 = lists[i];
                const list2 = lists[i + 1];
                merged.push(this.mergeTwoLists(list1, list2));
            }
            lists = merged;
        }
        
        return lists[0];

    }

    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        
        while (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        if (list1) {
            curr.next = list1;
        }

        if (list2) {
            curr.next = list2;
        }

        return dummy.next;
    }
}
