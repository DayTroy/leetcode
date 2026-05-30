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
        let curr1 = list1;
        let curr2 = list2;

        if (curr1 === null && curr2 === null) return null; 

        const res = [];

        while (curr1 !== null || curr2 !== null) {
            if (curr1 !== null) {
                let val1 = curr1.val;
                res.push(val1);
                curr1 = curr1.next;
            }

            if (curr2 !== null) {
                let val2 = curr2.val;
                res.push(val2);
                curr2 = curr2.next;
            }
        }

        res.sort((a, b) => a - b);
    
        const newNode = new ListNode(res[0]); 
        let curr = newNode;
        
        for (let i = 1; i < res.length; i++) {
            curr.next = new ListNode(res[i]);
            curr = curr.next;
        }
        
        return newNode;
    }
}
