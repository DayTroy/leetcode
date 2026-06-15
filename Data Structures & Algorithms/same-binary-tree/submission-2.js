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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stackP = [p];
        const stackQ = [q];

        while (stackP.length > 0 && stackQ.length > 0) {
            const nodeP = stackP.shift();
            const nodeQ = stackQ.shift();

            if (!nodeQ && !nodeP) continue;

            if ((!nodeQ || !nodeP) || nodeP.val !== nodeQ.val) return false;

            stackP.push(nodeP.left);
            stackP.push(nodeP.right);

            stackQ.push(nodeQ.left);
            stackQ.push(nodeQ.right);
        }

        return stackP.length === stackQ.length;
    }
}
