public class Solution {
    public bool ValidTree(int n, int[][] edges) {
        if (n != edges.Length + 1) return false;
        if (n == 1) return true;

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

        Queue<(int, int)> nodes = new();
        HashSet<int> visited = new();

        nodes.Enqueue((edges[0][0], -1));
        visited.Add(edges[0][0]);

        while (nodes.Count > 0) {
            var (node, parent) = nodes.Dequeue();
            foreach (int neighbor in graph[node]) {
                if (neighbor == parent) continue;

                if (visited.Contains(neighbor)) return false;
                visited.Add(neighbor);
                nodes.Enqueue((neighbor, node));
            }
        }

        return visited.Count == n;
    }
}