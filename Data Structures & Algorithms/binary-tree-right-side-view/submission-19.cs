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
        Queue<TreeNode> nodes = new();
        nodes.Enqueue(root);
        List<int> result = new();

        while (nodes.Count > 0) {
            int size = nodes.Count;

            for (int i = 0; i < size; i++) {
                TreeNode node = nodes.Dequeue();
                if (size - i == 1) {
                    result.Add(node.val);
                }

                if (node.left != null) {
                    nodes.Enqueue(node.left);
                }

                if (node.right != null) {
                    nodes.Enqueue(node.right);
                }
            }
        }

        return result;
    }
}
