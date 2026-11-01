/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution {    
    public bool IsSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) return false;

        if (IsSameTree(root, subRoot)) return true;

        return IsSubtree(root.left, subRoot) || IsSubtree(root.right, subRoot);
    }

    public bool IsSameTree(TreeNode p, TreeNode q) {
        Queue<TreeNode> pQueue = new();
        pQueue.Enqueue(p);
        Queue<TreeNode> qQueue = new();
        qQueue.Enqueue(q);

        while (pQueue.Count > 0 && qQueue.Count > 0) {
            TreeNode pNode = pQueue.Dequeue();
            TreeNode qNode = qQueue.Dequeue();

            if (pNode == null && qNode == null) continue;
            
            if (pNode == null || qNode == null ||  pNode.val != qNode.val) return false;

            pQueue.Enqueue(pNode.left);
            pQueue.Enqueue(pNode.right);
            qQueue.Enqueue(qNode.left);
            qQueue.Enqueue(qNode.right);
        }
        return true;
    }
}
