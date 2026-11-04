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
        Queue<(TreeNode Node, int MaxSoFar)> nodes = new();
        nodes.Enqueue((root, int.MinValue));
 
        while (nodes.Count > 0) {
            var (node, maxSoFar) = nodes.Dequeue();

            if (node.val >= maxSoFar) goodNodesCount++;
            maxSoFar = Math.Max(maxSoFar, node.val);

            if (node.left != null) {
                nodes.Enqueue((node.left, maxSoFar));
            }

            if (node.right != null) {
                nodes.Enqueue((node.right, maxSoFar));
            }
        }

        return goodNodesCount;
    }
}
