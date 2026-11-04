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
    public int KthSmallest(TreeNode root, int k) {
        int result = 0;
        int index = 0;
        DFS(root, k, ref index, ref result);
        return result;
    }

    public void DFS(TreeNode node, int k, ref int index, ref int result) {
        if (node == null) return;

        DFS(node.left, k, ref index, ref result);
        
        if (index + 1 == k) {
            result = node.val;
            index = index + 1;
            return;
        }
        index = index + 1;

        DFS(node.right, k, ref index, ref result);
    }
}
