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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        this.dfs(root, 0, res);
        return res;
    }

    dfs(node, depth, res) {
        if (!node) return null;

        if (res.length === depth) {
            res.push(node.val);
        }

        this.dfs(node.right, depth + 1, res);
        this.dfs(node.left, depth + 1, res);
    }
}
