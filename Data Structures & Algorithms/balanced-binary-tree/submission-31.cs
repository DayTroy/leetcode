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
    public bool IsBalanced(TreeNode root) {
        return DFS(root) != -1;
    }

    public int DFS(TreeNode node) {
        if (node == null) return 0;

        int leftHeight = DFS(node.left);
        if (leftHeight == -1) return -1;

        int rightHeight = DFS(node.right);
        if (rightHeight == -1) return -1;

        if (Math.Abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.Max(leftHeight, rightHeight);
    }
}
