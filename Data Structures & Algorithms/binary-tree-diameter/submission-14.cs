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
    private int MaxDiameter;

    public int DiameterOfBinaryTree(TreeNode root) {
        DFS(root);
        return MaxDiameter;
    }

    public int DFS(TreeNode node) {
        if (node == null) return 0;

        int left = DFS(node.left);
        int right = DFS(node.right);

        MaxDiameter = Math.Max(MaxDiameter, left + right);
        
        return 1 + Math.Max(left, right);
    }
}
