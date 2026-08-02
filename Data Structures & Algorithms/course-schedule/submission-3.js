class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();
        const visited = new Set();
        const visiting = new Set(); 

        for (const [course, prereq] of prerequisites) {
            if (!graph.has(prereq)) {
                graph.set(prereq, []);
            }
            graph.get(prereq).push(course);
        }

        for (let i = 0; i < numCourses; i++) {
            if (this.hasCycle(i, graph, visited, visiting)) {
                return false;
            }
        }

        return true;
    }

    hasCycle(course, graph, visited, visiting) {
        if (visiting.has(course)) return true;
        if (visited.has(course)) return false;

        visiting.add(course);

        const neighbors = graph.get(course) || [];
        for (const nextCourse of neighbors) {
            if (this.hasCycle(nextCourse, graph, visited, visiting)) return true;
        }

        visiting.delete(course);
        visited.add(course);

        return false;
    };
}
