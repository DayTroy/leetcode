class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        const graph = new Map();
        for (let i = 0; i < n; i++) graph.set(i, []);
        
        for (const [a, b] of edges) {
            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        const visited = new Set();
        const queue = [[0, -1]]; 
        visited.add(0);

        while (queue.length > 0) {
            const [node, parent] = queue.shift();

            for (const neighbor of graph.get(node)) {
                if (neighbor === parent) continue;

                if (visited.has(neighbor)) return false;

                visited.add(neighbor);
                queue.push([neighbor, node]);
            }
        }

        return visited.size === n;
    }
}
