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
    diameterOfBinaryTree(root) {
        if (!root) return 0;

        const left = this.getHeight(root.left);
        const right = this.getHeight(root.right);

        let diameter = left + right;
        let sub = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right));

        return Math.max(diameter, sub);
    }

    getHeight(node) {
        if (!node) return 0;

        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
}
