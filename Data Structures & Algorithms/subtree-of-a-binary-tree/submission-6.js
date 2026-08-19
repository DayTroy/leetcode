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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
       if (!root) return false;

       if (this.iSameTree(root, subRoot)) return true;

       return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    iSameTree(p, q) {
        const queue = [[p, q]];

        while (queue.length > 0) {
            const [nodeP, nodeQ] = queue.shift();

            if (!nodeP && !nodeQ) continue;

            if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false;

            queue.push([nodeP.left, nodeQ.left]);
            queue.push([nodeP.right, nodeQ.right]);
        }

        return true;
    }
}
