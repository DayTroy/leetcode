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
     * @return {number[][]}
     */
    _res = [];

    levelOrder(root) {
        this.dfs(root, 0);

        return this._res;
    }

    dfs(node, depth) {
        if (!node) return;

        if (this._res.length === depth) {
            this._res.push([]);
        }

        this._res[depth].push(node.val);


        const left = this.dfs(node.left, depth + 1);
        const right = this.dfs(node.right, depth + 1);
    }
}
