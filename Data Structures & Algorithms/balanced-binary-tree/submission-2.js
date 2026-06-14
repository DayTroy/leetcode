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
        return this.checkHeight(root) !== -1;
    }

    checkHeight(node) {
        if (!node) return 0;

        const leftHeight = this.checkHeight(node.left);
        if (leftHeight === -1) return -1; // Левое поддерево разбалансировано

        const rightHeight = this.checkHeight(node.right);
        if (rightHeight === -1) return -1; // Правое поддерево разбалансировано

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // Текущий узел разбалансирован
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
