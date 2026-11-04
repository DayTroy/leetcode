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
        Queue<List<object>> nodes = new();
        nodes.Enqueue(new List<object>(){ root, int.MinValue });
 
        while (nodes.Count > 0) {
            List<object> nodeArr = nodes.Dequeue();
            TreeNode node = (TreeNode)nodeArr[0];
            int maxSoFar = (int)nodeArr[1];

            if (node.val >= maxSoFar) goodNodesCount++;
            maxSoFar = Math.Max(maxSoFar, node.val);

            if (node.left != null) {
                nodes.Enqueue(new List<object>() { node.left, maxSoFar });
            }

            if (node.right != null) {
                nodes.Enqueue(new List<object>() { node.right, maxSoFar });
            }
        }

        return goodNodesCount;
    }
}
