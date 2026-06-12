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
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            const kth = this.getKthGroup(groupPrev, k);

            if (!kth) break;

            let groupNext = kth.next;
            let curr = groupPrev.next;
            let prev = kth.next;

            while (curr !== groupNext) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            
            const tmp = groupPrev.next
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
        
    }

    getKthGroup(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }

        return curr;
    }
}
