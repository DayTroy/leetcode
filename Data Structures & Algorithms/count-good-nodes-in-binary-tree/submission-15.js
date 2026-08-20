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
        let goods = [0];

        this.dfs(root, goods, -Infinity);

        return goods[0];
    }

    dfs(node, goods, maxSoFar) {
        if (!node) return;

        if (node.val >= maxSoFar) {
            goods[0]++;
        }
        maxSoFar = Math.max(maxSoFar, node.val);

        this.dfs(node.left, goods, maxSoFar);
        this.dfs(node.right, goods, maxSoFar);
    }
}
