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
    _result = null;

    kthSmallest(root, k) {
        const tmp = [k, 0];
        this.dfs(root, tmp);
        return tmp[1];
    }

    dfs(node, tmp) {
        if (!node) return;

        this.dfs(node.left, tmp);
        tmp[0]--;
        if (tmp[0] === 0) {
            tmp[1] = node.val;
            return;
        }

        this.dfs(node.right, tmp);
    }
}
