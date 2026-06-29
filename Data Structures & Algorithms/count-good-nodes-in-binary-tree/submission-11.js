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
    goodNodes(root) {
        return this.dfs(root, -Infinity);
    }

    dfs(node, max) {
        if (!node) return 0;

        let res = node.val >= max ? 1 : 0;
        max = Math.max(max, node.val);
        res += this.dfs(node.left, max);
        res += this.dfs(node.right, max);

        return res;
    }
}
