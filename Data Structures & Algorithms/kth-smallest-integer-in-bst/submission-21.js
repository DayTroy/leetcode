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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [];
        this.dfs(root, res)
        return res[k - 1];
    }

    dfs(node, res) {
        if (!node) return null;

        this.dfs(node.left, res);
        res.push(node.val);
        this.dfs(node.right, res);
    }
}
