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

        if (this.sameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

    }

    sameTree(p, q) {
        const stackP = [p];
        const stackQ = [q];

        while (stackP.length > 0 && stackQ.length > 0) {
            const nodeP = stackP.pop();
            const nodeQ = stackQ.pop();

            if (!nodeP && !nodeQ) continue;

            if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false;
        
            stackP.push(nodeP.left);
            stackP.push(nodeP.right);

            stackQ.push(nodeQ.left);
            stackQ.push(nodeQ.right);
        }

        return true;
    }
}
