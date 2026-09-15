class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 1 || edges.length === 0) return true;
        if (n - 1 !== edges.length) return false;

        const graph = new Map();

        for (const [a, b] of edges) {
            if (!graph.has(a)) graph.set(a, []);
            if (!graph.has(b)) graph.set(b, []);
            
            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        const visited = new Set();

        const queue = [edges[0][0]];
        visited.add(edges[0][0]);

        while (queue.length > 0) {
            const curr = queue.shift();

            for (const neighbour of graph.get(curr)) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }

        return visited.size === n;
    }
}
