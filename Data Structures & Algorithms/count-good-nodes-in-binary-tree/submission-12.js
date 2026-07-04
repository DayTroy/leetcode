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
        const stack = [[root, -Infinity]];
        let goods = 0;

        while (stack.length > 0) {
            const [node, maxSoFar] = stack.pop();

            if (node.val >= maxSoFar) goods++;

            if (node.left) {
                stack.push([node.left, Math.max(node.val, maxSoFar)])
            }
            if (node.right) {
                stack.push([node.right, Math.max(node.val, maxSoFar)])
            }
        }

        return goods;
    }
}
