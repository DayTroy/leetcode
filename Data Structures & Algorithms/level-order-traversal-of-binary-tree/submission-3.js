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

        let res = [];
        const queue = [root];
        
        while (queue.length > 0) {
            const size = queue.length;
            let arr = [];
            
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                arr.push(node.val);
            }

            res.push(arr);
        }

        return res;
    }
}
