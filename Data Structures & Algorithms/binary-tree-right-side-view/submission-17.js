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
        this.dfs(root, res, 0);
        return res;
    }

    dfs(node, res, level) {
        if (!node) return;

        if (level === res.length) {
            res.push(node.val);
        }
        
        this.dfs(node.right, res, level + 1);
        this.dfs(node.left, res, level + 1);
    }
}
