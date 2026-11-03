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
    public List<List<int>> LevelOrder(TreeNode root) {
        List<List<int>> result = new();
        int height = 0;
        DFS(root, result, height);
        return result;
    }

    public void DFS(TreeNode node, List<List<int>> result, int height) {
        if (node == null) return;

        if (result.Count == height) {
            result.Add(new List<int>());
        }

        result[height].Add(node.val);
        DFS(node.left, result, height + 1);
        DFS(node.right, result, height + 1);
    }
}
