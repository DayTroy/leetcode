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

        for (const [a, b] of prerequisites) {
            if (!graph.has(b)) {
                graph.set(b, []);
            }
            graph.get(b).push(a);
        }

        for (let i = 0; i < numCourses; i++) {
            if (this.hasCycle(i, graph, visited, visiting)) return false;
        }

        return true;
    }

    hasCycle(course, graph, visited, visiting) {
        if (visiting.has(course)) return true;
        if (visited.has(course)) return false;

        visiting.add(course);
        const next = graph.get(course) || [];
        
        for (const item of next) {
            if (this.hasCycle(item, graph, visited, visiting)) {
                return true;
            }
        }

        visiting.delete(course);
        visited.add(course);
    }
}
