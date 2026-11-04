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
    public List<int> RightSideView(TreeNode root) {
        if (root == null) return new List<int>();

        List<int> result = new();
        int height = 0;
        DFS(root, result, height);

        return result;
    }

    public void DFS(TreeNode node, List<int> result, int height) {
        if (node == null) return;

        if (result.Count == height) {
            result.Add(node.val);
        }

        DFS(node.right, result, height + 1);
        DFS(node.left, result, height + 1);
    }
}
