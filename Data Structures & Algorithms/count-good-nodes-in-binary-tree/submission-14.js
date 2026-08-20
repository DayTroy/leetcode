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
        if (!root) return 0;
    
        const queue = [[root, -Infinity]];
        let goods = 0;
        while (queue.length > 0) {
            let [node, maxSoFar] = queue.shift();

            if (node.val >= maxSoFar) {
                goods++;
            }

            maxSoFar = Math.max(maxSoFar, node.val);

            if (node.left) {
                queue.push([node.left, maxSoFar])
            }

            if (node.right) {
                queue.push([node.right, maxSoFar])
            }
        }

        return goods;


    }

    dfs(node, maxSoFar) {
      
    }
}
