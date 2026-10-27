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
    public void ReorderList(ListNode head) {
        List<ListNode> nodes = new();

        ListNode curr = head;
        while (curr != null) {
            nodes.Add(curr);
            curr = curr.next;
        }

        int l = 0, r = nodes.Count - 1;
        while (l < r) {
            nodes[l].next = nodes[r];
            l++;
            nodes[r].next = nodes[l];
            r--;
        }
        nodes[l].next = null;
    }
}
