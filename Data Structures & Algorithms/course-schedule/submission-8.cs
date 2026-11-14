public class Solution {
    public readonly Dictionary<int, List<int>> graph = new();
    public bool CanFinish(int numCourses, int[][] prerequisites) {
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
            if (hasCycle(i, visited, visiting)) return false;
        }
        return true;
    }

    public bool hasCycle(int course, HashSet<int> visited, HashSet<int> visiting) {
        if (visiting.Contains(course)) return true;
        if (visited.Contains(course)) return false;

        visiting.Add(course);
        List<int> courses;

        if (graph.ContainsKey(course)) {
            courses = graph[course];
        } else {
            courses = new List<int>() {};
        }

        for (int i = 0; i < courses.Count; i++) {
            if (hasCycle(courses[i], visited, visiting)) return true;
        }

        visiting.Remove(course);
        visited.Add(course);
        return false;
    }
}
