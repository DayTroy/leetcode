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

        if (this.isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

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
