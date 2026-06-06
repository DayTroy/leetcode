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
        let arr = [];

        for (let list of lists) {
            let curr = list;
            while (curr) {
                arr.push(curr.val)
                curr = curr.next;
            }
        }

        arr.sort((a, b) => a - b);

        let ans = new ListNode(0);
        let curr = ans;

        for (let i = 0; i < arr.length; i++) {
            let node = new ListNode(arr[i]);
            curr.next = node;
            curr = curr.next;
        }

        return ans.next;
    }
}
