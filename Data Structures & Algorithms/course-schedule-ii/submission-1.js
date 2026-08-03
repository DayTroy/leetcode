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
        
        for (const [course, preq] of prerequisites) {
            if (!graph.has(preq)) {
                graph.set(preq, []);
            }
            graph.get(preq).push(course);
        }

        const order = [];

        for (let i = 0; i < numCourses; i++) {
            if (this.hasCycle(i, graph, visited, visiting, order)) return [];
        }

        return order.reverse();
    }

    hasCycle(course, graph, visited, visiting, order) {
        if (visited.has(course)) return false;
        if (visiting.has(course)) return true;

        visiting.add(course);
        const nextCourse = graph.get(course) || [];

        for (let course of nextCourse) {
            if (this.hasCycle(course, graph, visited, visiting, order)) return true;
        }

        visiting.delete(course);
        visited.add(course);

        order.push(course);
    }
}
