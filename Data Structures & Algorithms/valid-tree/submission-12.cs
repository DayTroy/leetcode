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

        Queue<(int node, int parent)> nodes = new();
        visited.Add(edges[0][0]);
        nodes.Enqueue((edges[0][0], -1));
        while (nodes.Count > 0) {
            var (nodeRemoved, nodeParent) = nodes.Dequeue();
            List<int> neighbors = graph[nodeRemoved];

            foreach (int neighbor in neighbors) {
                if (neighbor == nodeParent) continue;

                if (visited.Contains(neighbor)) return false;

                visited.Add(neighbor);
                nodes.Enqueue((neighbor, nodeRemoved));
            }

        } 

        return visited.Count == n;

                // for (int i = 0; i < n; i++) {
        //     if (HasCycle(i, visited, graph)) return false;
        // }

        // return true;

    }

    public bool HasCycle(int item, HashSet<int> visited, Dictionary<int, List<int>> graph) {
        if (visited.Contains(item)) return true;
        List<int> neighbors = graph[item];
        visited.Add(item);
        
        foreach (int neighbor in neighbors) {
            if (HasCycle(neighbor, visited, graph)) return true;
        }

        return false;
    }
}
