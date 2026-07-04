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

    dfs(node, maxSoFar) {
        if (!node) return null;

        let res = node.val >= maxSoFar ? 1 : 0;

        maxSoFar = Math.max(node.val, maxSoFar);

        res += this.dfs(node.left, maxSoFar);
        res += this.dfs(node.right, maxSoFar);

        return res;
    }
}
