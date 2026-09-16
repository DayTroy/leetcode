class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();
        const visited = new Set();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const [a, b] of edges) {
            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        let count = 0;

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                const queue = [i];
                visited.add(i);

                while (queue.length > 0) {
                    const node = queue.shift();

                    for (const neighbor of graph.get(node)) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                    }
                }
            }
        }


        return count;
    }
}
