public class Solution {
    public int CountComponents(int n, int[][] edges) {
        int graphCounts = 0;
        HashSet<int> visited = new();
        Dictionary<int, List<int>> graph = new();

        foreach (int[] edge in edges) {
            if (!graph.ContainsKey(edge[0])) {
                graph[edge[0]] = new List<int>();
            }
            graph[edge[0]].Add(edge[1]);

            if (!graph.ContainsKey(edge[1])) {
                graph[edge[1]] = new List<int>();
            }
            graph[edge[1]].Add(edge[0]);
        }

        for (int i = 0; i < n; i++) {
            if (!graph.ContainsKey(i)) {
                graphCounts++;
                continue;
            }
            if (!visited.Contains(i)) {
                DFS(i, visited, graph);
                graphCounts++;
            }
        }

        return graphCounts;
    }

    public void DFS(int node, HashSet<int> visited, Dictionary<int, List<int>> graph) {
        if (visited.Contains(node)) return;
        visited.Add(node);
        foreach (int neighbor in graph[node]) {
            if (!visited.Contains(neighbor)) {
                DFS(neighbor, visited, graph);
            }
        }
    }
}
