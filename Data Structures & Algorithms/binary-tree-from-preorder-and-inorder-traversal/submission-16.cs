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
    int pre_idx = 0;
    Dictionary<int, int> indices = new();

    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        for (int i = 0; i < inorder.Length; i++) {
            indices[inorder[i]] = i;
        }

        return DFS (preorder, 0, inorder.Length - 1);
    }

    public TreeNode DFS(int[] preorder, int l, int r) {
        if (l > r) return null;

        int rootVal = preorder[pre_idx++];
        TreeNode node = new(rootVal);
        int m = indices[rootVal];

        node.left = DFS(preorder, l, m - 1);
        node.right = DFS(preorder, m + 1, r);

        return node;
    }
}
