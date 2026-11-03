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
        if (root == null) return new List<List<int>>();

        Queue<TreeNode> nodes = new();
        nodes.Enqueue(root);
        List<List<int>> result = new();
        int currIndex = 0;

        while (nodes.Count > 0) {
            int size = nodes.Count;    
            result.Add(new List<int>());

            for (int i = 1; i <= size; i++) {
                TreeNode node = nodes.Dequeue();
                result[currIndex].Add(node.val);

                if (node.left != null) {
                    nodes.Enqueue(node.left);
                }
                if (node.right != null) {
                    nodes.Enqueue(node.right);
                }
            }
            currIndex++;
        }

        return result;
    }
}
