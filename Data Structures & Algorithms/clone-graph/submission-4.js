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

        const visited = new Map();
        visited.set(node, new Node(node.val));
        const queue = [node];

        while (queue.length > 0) {
            const curr = queue.shift();
            for (let neighbor of curr.neighbors) {
                if (!visited.has(neighbor)) {
                    visited.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor)
                }
                visited.get(curr).neighbors.push(visited.get(neighbor));
            }
        }

        return visited.get(node);
    }
}
