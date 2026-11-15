public class Solution {
    public bool ValidTree(int n, int[][] edges) {
        if (n - 1 != edges.Length) return false;
        if (n == 1) return true;

        Dictionary<int, List<int>> graph = new();
        HashSet<int> visited = new();

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

        if (HasCycle(edges[0][0], -1, visited, graph)) return false;
        return visited.Count == n;
    }

    public bool HasCycle(int node, int parent, HashSet<int> visited, Dictionary<int, List<int>> graph) {
        if (visited.Contains(node)) return true;
        List<int> neighbors = graph[node];
        visited.Add(node);

        foreach (int neighbor in neighbors) {
            if (neighbor == parent) continue;
            if (HasCycle(neighbor, node, visited, graph)) return true;
        }

        return false;
    }
}
