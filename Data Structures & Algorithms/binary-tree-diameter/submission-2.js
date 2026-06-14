/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    maxDiameter = 0;

    diameterOfBinaryTree(root) {
        this.dfs(root);

        return this.maxDiameter;
    }

    /**
     * @param {TreeNode} root
     * @param {number[]} res
     * @return {number}
     */
    dfs(root) {
        if (!root) return 0;

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);
    
        this.maxDiameter = Math.max(this.maxDiameter, left + right);
        return 1 + Math.max(left, right);
    }
}
