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

    _maxDepth = 0;

    diameterOfBinaryTree(root) {
        if (!root) return 0;

        this.dfs(root);

        return this._maxDepth;
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

        this._maxDepth = Math.max(this._maxDepth, left + right);

        return 1 + Math.max(left, right);
    }
}
