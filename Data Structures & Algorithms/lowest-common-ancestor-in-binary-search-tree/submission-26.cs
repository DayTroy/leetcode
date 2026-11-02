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
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode current = root;
        
        while (current != null) {
            if (current.val < Math.Min(p.val, q.val)) {
                current = current.right;
            }
            else if (current.val > Math.Max(p.val, q.val)) {
                current = current.left;
            }
            else {
                return current;
            }
        }
        
        return null;
    }
}
