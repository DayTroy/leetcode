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
        const queue = [root];
        const lst = [];

        if (!root) return lst;

        while (queue.length > 0) {
            const size = queue.length;
            const arr = [];

            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                arr.push(node.val);

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }

            lst.push(arr);
        }

        return lst;
    }
}
