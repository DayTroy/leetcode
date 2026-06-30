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
        const res = [0, k];
        this.dfs(root, res);
        return res[0];
    }

    dfs(node, res) {
        if (!node) return;
        this.dfs(node.left, res);
    
        if (res[1] === 0) return;
        res[1]--;

        if (res[1] === 0) {
            res[0] = node.val;
            return;
        }

        this.dfs(node.right, res);
    }
}
