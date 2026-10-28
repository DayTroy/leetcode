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
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode();
        ListNode curr = dummy;
        int curry = 0;

        while (l1 != null || l2 != null || curry != 0) {
            int l1Val = l1 != null ? l1.val : 0;
            int l2Val = l2 != null ? l2.val : 0;

            int val = l1Val + l2Val + curry;
            int result = val % 10;
            curry = val / 10;
            ListNode node = new ListNode(result);
            curr.next = node;
            curr = curr.next;

            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
        }

        return dummy.next;
    }
}
