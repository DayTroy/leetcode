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
        let goods = 0;
        const queue = [[root, -Infinity]];

        while (queue.length > 0) {
            const [node, maxVal] = queue.pop();

            if (node.val >= maxVal) {
                goods++;
            }

            if (node.left) {
                queue.push([node.left, Math.max(maxVal, node.val)]);
            }

            if (node.right) {
                queue.push([node.right, Math.max(maxVal, node.val)]);
            }
        }

        return goods;
    }
}
