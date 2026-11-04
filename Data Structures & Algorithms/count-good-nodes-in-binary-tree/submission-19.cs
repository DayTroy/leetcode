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
        int goodNodesCount = 0;
        int maxSoFar = int.MinValue;
        DFS(root, ref goodNodesCount, maxSoFar);
        return goodNodesCount;
    }

    public void DFS(TreeNode node, ref int goodNodesCount, int max) {
        if (node == null) return;

        if (max <= node.val) goodNodesCount++;
        max = Math.Max(max, node.val);
        DFS(node.left, ref goodNodesCount, max);
        DFS(node.right, ref goodNodesCount, max);
    }
}
