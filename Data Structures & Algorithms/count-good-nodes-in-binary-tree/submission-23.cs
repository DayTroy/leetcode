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
    public int GoodNodes(TreeNode root) {
        return DFS(root, int.MinValue);
    }

    public int DFS(TreeNode node, int max) {
        if (node == null) return 0;

        int isGood = max <= node.val ? 1 : 0;
        max = Math.Max(max, node.val);

        return isGood + DFS(node.left, max) + DFS(node.right, max);
    }
}
