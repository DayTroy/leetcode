public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        List<List<int>> buckets = Enumerable
            .Range(0, nums.Length + 1)
            .Select(_ => new List<int>())
            .ToList();

        var frequency = new Dictionary<int, int>();

        foreach (int num in nums) {
            frequency.TryGetValue(num, out int curr);
            frequency[num] = curr + 1;
        }

        foreach (var (key, value) in frequency) {
            buckets[value].Add(key);
        }

        var result = new List<int>();

        for (int i = buckets.Count - 1; i >= 0; i--) {
            for (int j = buckets[i].Count - 1; j >= 0; j--) {
                result.Add(buckets[i][j]);
                if (result.Count == k) return result.ToArray();
            }
        }

        return result.ToArray();
    }
}
