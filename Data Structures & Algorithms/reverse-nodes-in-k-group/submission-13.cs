/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public ListNode ReverseKGroup(ListNode head, int k) {
        ListNode dummy = new(0, head);
        ListNode groupPrev = dummy;

        while (true) {
            ListNode curr = groupPrev.next;
            ListNode kth = GetKthGroup(groupPrev, k);
            if (kth == null) break;

            ListNode target = kth.next;
            ListNode prev = kth.next != null ? kth.next : null;
            
            while (curr != target) {
                ListNode next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            ListNode nex = groupPrev.next;
            groupPrev.next = prev;
            groupPrev = nex;
        }

        return dummy.next;
    }

    public ListNode GetKthGroup(ListNode node, int k) {
        ListNode curr = node;
        while (curr != null && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
