/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const oldToNew = new Map();
        const queue = [node];
        oldToNew.set(node, new Node(node.val));

        while (queue.length > 0) {
            const curr = queue.shift();
            for (const neighbor of curr.neighbors) {
                if (!oldToNew.has(neighbor)) {
                    oldToNew.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                }
                oldToNew.get(curr).neighbors.push(oldToNew.get(neighbor));
            }
        }

        return oldToNew.get(node);
    }
}
