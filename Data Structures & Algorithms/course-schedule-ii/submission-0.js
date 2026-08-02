class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = new Map();
        const visited = new Set();
        const visiting = new Set();
        const order = [];

        for (const [a, b] of prerequisites) {
            if (!graph.has(b)) {
                graph.set(b, []);
            }
            graph.get(b).push(a);
        }

        for (let i = 0; i < numCourses; i++) {
            if (this.hasCycle(i, graph, visited, visiting, order)) {
                return [];
            }
        }

        return order.reverse();

    }

    hasCycle(course, graph, visited, visiting, order) {
        if (visited.has(course)) return false;
        if (visiting.has(course)) return true;

        visiting.add(course);
        const neighbours = graph.get(course) || [];

        for (const nextCourse of neighbours) {
            if (this.hasCycle(nextCourse, graph, visited, visiting, order)) {
                return true;
            }
        }

        visiting.delete(course);
        visited.add(course);

        order.push(course);
    }
}
