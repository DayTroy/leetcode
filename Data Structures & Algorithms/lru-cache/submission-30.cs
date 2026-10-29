public class ListNode {
    public int _key;
    public int _value;
    public ListNode next;
    public ListNode prev;

    public ListNode(int key, int value) {
        _key = key;
        _value = value;
        next = null;
        prev = null;
    }
}

public class LRUCache {
    private int _capacity;
    private Dictionary<int, ListNode> cache = new();
    private ListNode start = new(0, 0);
    private ListNode end = new(0, 0);

    public LRUCache(int capacity) {
        _capacity = capacity;
        start.next = end;
        start.prev = null;
        end.next = null;
        end.prev = start;
    }

    private void InsertNode(ListNode node) {
        ListNode neighbourLeft = end.prev;
        ListNode neighbourRight = end;

        neighbourLeft.next = node;
        neighbourRight.prev = node;

        node.next = neighbourRight;
        node.prev = neighbourLeft;
    }

    private void RemoveNode(ListNode node) {
        ListNode neighbourLeft = node.prev;
        ListNode neighbourRight = node.next;

        neighbourLeft.next = neighbourRight;
        neighbourRight.prev = neighbourLeft;

        node.next = null;
        node.prev = null;
    }
    
    public int Get(int key) {
        if (!cache.ContainsKey(key)) return -1;

        ListNode node = cache[key];
        cache.Remove(key);
        RemoveNode(node);

        cache[key] = node;
        InsertNode(node);
        return node._value;
    }
    
    public void Put(int key, int value) {
        if (cache.ContainsKey(key)) {
            RemoveNode(cache[key]);
            cache.Remove(key);
        } else if (_capacity == cache.Count) {
            ListNode node = start.next;
            RemoveNode(node);
            cache.Remove(node._key);
        }
        ListNode newNode = new(key, value);
        cache[key] = newNode;
        InsertNode(newNode);
    }
}
