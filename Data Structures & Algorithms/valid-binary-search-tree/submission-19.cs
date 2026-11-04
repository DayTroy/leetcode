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
    public bool IsValidBST(TreeNode root) {
        Queue<(TreeNode QNode, int QMin, int QMax)> nodes = new();
        nodes.Enqueue((root, int.MinValue, int.MaxValue));

        while (nodes.Count > 0) {
            var (node, min, max) = nodes.Dequeue();

            if (node.val <= min || node.val >= max) return false;

            if (node.left != null) {
                nodes.Enqueue((node.left, min, node.val));
            }

            if (node.right != null) {
                nodes.Enqueue((node.right, node.val, max));
            }
        }

        return true;
    }
}
