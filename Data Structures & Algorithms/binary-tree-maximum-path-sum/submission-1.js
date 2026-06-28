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
    _res = -Infinity;
    maxPathSum(root) {
        this.dfs(root);
        return this._res;
    }

    getMax(node) {
        if (!node) return 0;
        let left = this.getMax(node.left);
        let right = this.getMax(node.right);
        let path = node.val + Math.max(left, right);
        return Math.max(0, path);
    }

    dfs(node) {
        if (!node) return;
        let left = this.getMax(node.left);
        let right = this.getMax(node.right);
        this._res = Math.max(this._res, node.val + left + right);
        this.dfs(node.left);
        this.dfs(node.right);
    }
}
