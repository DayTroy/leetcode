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
    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        if (preorder == null || inorder == null || preorder.Length == 0) return null;

        int rootVal = preorder[0];
        TreeNode node = new(rootVal);
        int m = Array.IndexOf(inorder, preorder[0]);

        node.left  = BuildTree(preorder[1..(m+1)], inorder[0..m]);
        node.right = BuildTree(preorder[(m+1)..], inorder[(m+1)..]);

        return node;
    }
}
