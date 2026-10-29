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
    public ListNode MergeKLists(ListNode[] lists) {
        if (lists.Length == 0) return null;

        while (lists.Length > 1) {
            List<ListNode> merged = new();
            for (int i = 0; i < lists.Length; i += 2) {
                ListNode l1 = lists[i];
                ListNode l2 = i < lists.Length - 1 ? lists[i + 1] : null;
                merged.Add(MergeTwoLists(l1, l2));
            }
            lists = merged.ToArray();
        }

        return lists[0];
    }

    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0, null);
        ListNode curr = dummy;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        if (list1 != null) {
            curr.next = list1;
        }

        if (list2 != null) {
            curr.next = list2;
        }

        return dummy.next;
    }
}
