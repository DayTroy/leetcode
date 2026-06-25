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
    isValidBST(root) {
        const queue = [[root, -Infinity, Infinity]];

        while (queue.length > 0) {
            const [node, min, max] = queue.pop();

            if (node.val <= min || node.val >= max) return false;

            if (node.left) {
                queue.push([node.left, min, node.val]);
            }
            if (node.right) {
                queue.push([node.right, node.val, max]);
            }
        }

        return true;
    }
}
