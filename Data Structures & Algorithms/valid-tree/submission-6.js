class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 1) return true;
        if (edges.length !== n - 1) return false;

        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const [a, b] of edges) {
            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        const visited = new Set();
        const queue = [[edges[0][0], -1]];
        visited.add(edges[0][0]);

        while (queue.length > 0) {
            const [node, parent] = queue.shift();

            for (const neighbor of graph.get(node)) {
                if (neighbor === parent) continue;

                if (visited.has(neighbor)) return false;

                queue.push([neighbor, node]);
                visited.add(neighbor);
            }
        }

        return visited.size === n;
    }
}
