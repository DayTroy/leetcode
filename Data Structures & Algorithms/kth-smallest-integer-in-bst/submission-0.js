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
        const res = [];

        let index = 1;

        while (stack.length > 0) {
            const node = stack.pop();

            res.push(node.val);
            index++;

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        return res.sort((a, b) => a - b)[k - 1];

    }
}
