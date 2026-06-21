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

    isBalanced(root) {
        if (!root) return true;

        const left = this.maxHeight(root.left);
        const right = this.maxHeight(root.right);

        if (Math.abs(left - right) > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    maxHeight(node) {
        if (!node) return 0;

        return 1 + Math.max(this.maxHeight(node.left), this.maxHeight(node.right));
    }

    checkHeight(node) {

    }
}
