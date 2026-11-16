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

        HashSet<int> visited = new();

        if(HasCycle(graph, visited, edges[0][0], -1)) return false;

        return visited.Count == n;        
    }

    public bool HasCycle(Dictionary<int, List<int>> graph, HashSet<int> visited, int node, int parent) {
        if (visited.Contains(node)) return true;
        visited.Add(node);

        foreach (int neighbor in graph[node]) {
            if (neighbor == parent) continue;
            if (HasCycle(graph, visited, neighbor, node)) return true;
        }
        return false;
    }
}