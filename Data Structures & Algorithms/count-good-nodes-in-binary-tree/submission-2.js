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
        return this.dfs(root, root.val);
    }

    dfs(node, maxSoFar) {
        if (!node) return 0;
        
        let isGood = 0;
        if (node.val >= maxSoFar) {
            isGood = 1;
        }
        
        let newMax = Math.max(maxSoFar, node.val);
        
        return isGood + this.dfs(node.left, newMax) + this.dfs(node.right, newMax);
    }
}
