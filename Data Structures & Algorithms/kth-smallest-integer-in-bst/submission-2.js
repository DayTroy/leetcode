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
        const stack = [root];
        let max = -Infinity;
        let min = +Infinity;

        while (stack.length > 0) {
            const node = stack.pop();

            min = Math.min(min, node.val);
            max = Math.max(max, node.val);

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        return [...Array(max - min + 1).keys()].map(i => i + min)[k - 1];
    }
}
