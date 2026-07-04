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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const queue = [root];
        const res = [];

        while (queue.length > 0) {
            const size = queue.length;
            let items = [];
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                items.push(node.val);

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }
            res.push(items);
        }
    
        return res;
    }
}
