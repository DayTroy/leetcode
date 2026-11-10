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

        Dictionary<Node, Node> graph = new();
        Queue<Node> nodes = new();
        nodes.Enqueue(node);
        graph.Add(node, new Node(node.val));
        while (nodes.Count > 0) {
            var dequeued = nodes.Dequeue();

            graph[dequeued].neighbors = new List<Node>();

            foreach (Node neighbor in dequeued.neighbors) {
                if (!graph.ContainsKey(neighbor)) {
                    graph.Add(neighbor, new Node(neighbor.val));
                    nodes.Enqueue(neighbor);
                } 
                graph[dequeued].neighbors.Add(graph[neighbor]);   
            }
            
        }
        return graph[node];
    }
}
