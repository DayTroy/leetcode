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
     * @return {number[]}
     */    
    rightSideView(root) {
        if (!root) return [];
        const queue = [root];
        const visibles = [];

        while (queue.length > 0) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const node = queue.shift();

                if (size - i === 1) {
                    visibles.push(node.val);
                }

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return visibles;
    }
}
