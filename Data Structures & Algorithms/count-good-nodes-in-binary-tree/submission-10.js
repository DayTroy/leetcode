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
            let [node, max] = stack.pop();

            if (node.val >= max) {
                goods++;
            }

            max = Math.max(node.val, max);

            if (node.left) stack.push([node.left, max]);
            if (node.right) stack.push([node.right, max]);
        }

        return goods;
    }
}
