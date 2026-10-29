public class LRUCache {
    private int _capacity;
    private OrderedDictionary<int, int> cache = new();

    public LRUCache(int capacity) {
        _capacity = capacity;
    }
    
    public int Get(int key) {
        if (!cache.ContainsKey(key)) return -1;

        int val = cache[key];
        cache.Remove(key);
        cache[key] = val;
        return val;
    }
    
    public void Put(int key, int value) {
        if (cache.ContainsKey(key)) {
            cache.Remove(key);
        } else if (_capacity == cache.Count) {
            cache.RemoveAt(0);
        }
        cache[key] = value;
    }
}
