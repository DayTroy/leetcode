class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();

        for (const [course, prereq] of prerequisites) {
            if (!graph.has(prereq)) {
                graph.set(prereq, []);
            }
            graph.get(prereq).push(course);
        }

        const visited = new Set();
        const visiting = new Set();

        for (let i = 0; i < numCourses; i++) {
            if (this.hasCycle(i, graph, visited, visiting)) return false;
        }

        return true;
    }

    hasCycle(course, graph, visited, visiting) {
        if (visited.has(course)) return false;
        if (visiting.has(course)) return true;

        visiting.add(course);

        const items = graph.get(course) || [];
        for (const nextCourse of items) {
            if (this.hasCycle(nextCourse, graph, visited, visiting)) return true;
        }

        visiting.delete(course);
        visited.add(course);
    }
}
