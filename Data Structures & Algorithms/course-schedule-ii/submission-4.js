class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = new Map();

        for (const [a, b] of prerequisites) {
            if (!graph.has(b)) {
                graph.set(b, []);
            }
            graph.get(b).push(a);
        }

        const order = [];
        const visited = new Set();
        const visiting = new Set();
        for (let i = 0; i < numCourses; i++) {
            if (this.hasCycle(i, graph, visited, visiting, order)) return []; 
        }

        return order.reverse();
    }

    hasCycle(course, graph, visited, visiting, order) {
        if (visiting.has(course)) return true;
        if (visited.has(course)) return false;

        visiting.add(course);
        const items = graph.get(course) || [];

        for (const item of items) {
            if (this.hasCycle(item, graph, visited, visiting, order)) {
                return true;
            }
        }

        visiting.delete(course);
        visited.add(course);

        order.push(course);
    }
}
