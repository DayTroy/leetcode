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
        let curr = root;
        const stack = [];

        while (curr || stack.length > 0) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            const node = stack.pop();
            k--;
            if (k === 0) return node.val;
            curr = node.right;
        }

        return null;
    }
}
