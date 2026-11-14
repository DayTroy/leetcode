public class Solution {
    Dictionary<int, List<int>> graph = new();
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        HashSet<int> visited = new();
        HashSet<int> visiting = new();

        foreach (int[] prerequisite in prerequisites) {
            int a = prerequisite[0];
            int b = prerequisite[1];

            if (!graph.ContainsKey(a)) {
                graph[a] = new List<int>();
            }
            graph[a].Add(b);
        }

        for (int i = 0; i < numCourses; i++) {
            if (HasCycle(i, visited, visiting)) return new int[] {};
        }

        return visited.ToArray();
    }

    public bool HasCycle(int course, HashSet<int> visited, HashSet<int> visiting) {
        if (visited.Contains(course)) return false;
        if (visiting.Contains(course)) return true;
        visiting.Add(course);

        if (graph.TryGetValue(course, out var courses)) {
            foreach (int nextCourse in courses) {
                if (HasCycle(nextCourse, visited, visiting)) return true;
            }
        }

        visited.Add(course);
        visiting.Remove(course);

        return false;
    }
}
