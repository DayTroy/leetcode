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
    _goods = [];
    goodNodes(root) {
        this.dfs(root, root.val);
        return this._goods.length;
    }

    dfs(node, maxSoFar) {
        if (!node) return null;
        
        // let isGood = 0;
        if (node.val >= maxSoFar) {
            this._goods.push(node.val);
            // isGood = 1;
        }
        
        let newMax = Math.max(maxSoFar, node.val);
        
        this.dfs(node.left, newMax);
        this.dfs(node.right, newMax);
    }
}
