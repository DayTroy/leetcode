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
        const pStack = [p];
        const qStack = [q];

        while (pStack.length > 0 && qStack.length > 0) {
            const nodeP = pStack.pop();
            const nodeQ = qStack.pop();

            if (!nodeP && !nodeQ) continue;

            if (!nodeP || !nodeQ) return false;

            if (nodeP.val !== nodeQ.val) return false;
            
            pStack.push(nodeP.left);
            pStack.push(nodeP.right);

            qStack.push(nodeQ.left);
            qStack.push(nodeQ.right);
        }

        return true;
    }
}
