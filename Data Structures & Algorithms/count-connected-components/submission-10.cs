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
                BFS(i, visited, graph);
                graphCounts++;
            }
        }

        return graphCounts;
    }

    public void BFS(int node, HashSet<int> visited, Dictionary<int, List<int>> graph) {
        Queue<int> nodes = new();
        nodes.Enqueue(node);
        while (nodes.Count > 0) {
            int dequeuedNode = nodes.Dequeue();

            foreach (int neighbor in graph[dequeuedNode]) {
                if (!visited.Contains(neighbor)) {
                    visited.Add(neighbor);
                    nodes.Enqueue(neighbor);
                }
            }
        }
    }
}
