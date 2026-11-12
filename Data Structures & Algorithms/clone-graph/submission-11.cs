/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> neighbors;

    public Node() {
        val = 0;
        neighbors = new List<Node>();
    }

    public Node(int _val) {
        val = _val;
        neighbors = new List<Node>();
    }

    public Node(int _val, List<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

public class Solution {
    public Node CloneGraph(Node node) {
        if (node == null) return null;
        Queue<Node> queue = new();
        Dictionary<Node, Node> graph = new();
        queue.Enqueue(node);
        graph[node] = new Node(node.val);

        while (queue.Count > 0) {
            Node dequeued = queue.Dequeue();
            foreach (Node neighbor in dequeued.neighbors) {
                if (!graph.ContainsKey(neighbor)) {
                    graph[neighbor] = new Node(neighbor.val);
                    queue.Enqueue(neighbor);
                }
                graph[dequeued].neighbors.Add(graph[neighbor]);
            }
        }

        return graph[node];
    }
}
