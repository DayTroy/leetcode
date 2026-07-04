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
    _diameter = 0;
    diameterOfBinaryTree(root) {
        this.dfs(root);
        return this._diameter;
    }

    dfs(node) {
        if (!node) return 0;

        const left = this.dfs(node.left);
        const right = this.dfs(node.right);

        this._diameter = Math.max(this._diameter, left + right);

        return 1 + Math.max(this.dfs(node.left), this.dfs(node.right));
    }
}
