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
     * @return {boolean}
     */

    isBalanced(node) {
        if (!node) return true;

        const left = this.getHeight(node.left);
        const right = this.getHeight(node.right);

        if (Math.abs(left - right) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    getHeight(node) {
        if (!node) return 0;

        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
}
