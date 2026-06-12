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

    diameter = 0;

    diameterOfBinaryTree(root) {
        this.dfs(root);

        return this.diameter;
    }

    dfs(curr) {
        if (!curr) return 0;

        const left = this.dfs(curr.left);
        const right = this.dfs(curr.right);
        this.diameter = Math.max(this.diameter, left + right);

        return Math.max(left, right) + 1;
    }
}
