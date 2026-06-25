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
    levelOrder(root) {
        const res = [];
        this.dfs(root, res.length, res);
        return res;
    }

    dfs(node, depth, res) {
        if (!node) return;

        if (res.length === depth) {
            res.push([]);
        }

        res[depth].push(node.val);
        this.dfs(node.left, depth + 1, res);
        this.dfs(node.right, depth + 1, res);
    }
}
