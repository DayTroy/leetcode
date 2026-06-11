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
     * @param {number} k
     * @return {ListNode}
     */
    // [1,2,3,4,5,6]
    // k = 3
    
    // 0 => [1,2,3] [4,5,6]
    // 0 => [3,2,1] [4,5,6]
    // 
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            // 3
            let kth = this.getKthGroup(groupPrev, k);

            if (!kth) break;

            // 1
            let curr = groupPrev.next;

            // 4
            let groupNext = kth.next;

            let prev = kth.next;
            while (curr !== groupNext) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            // 1
            const temp = groupPrev.next;
            groupPrev.next = kth
            groupPrev = temp;

        }

        return dummy.next;
    }

    getKthGroup(curr, k) {
        while (curr && k > 0) {
            k--;
            curr = curr.next;
        }

        return curr;
    }
}
