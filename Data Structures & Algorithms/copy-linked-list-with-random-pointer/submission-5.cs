/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;
    public Node random;
    
    public Node(int _val) {
        val = _val;
        next = null;
        random = null;
    }
}
*/

public class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) return null;

        Dictionary<Node, Node> dicti = new();

        Node curr = head;
        while (curr != null) {
            dicti[curr] = new Node(curr.val);
            curr = curr.next;
        }

        curr = head;
        while (curr != null) {
            Node copy = dicti[curr];
            if (curr.next != null) {
                copy.next = dicti[curr.next];
            } else {
                copy.next = null;
            }

            if (curr.random != null) {
                copy.random = dicti[curr.random];
            } else {
                copy.random = null;
            }
            curr = curr.next;
        }

        return dicti[head];
    }
}
