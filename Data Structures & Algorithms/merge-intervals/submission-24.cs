public class Solution {
    public int[][] Merge(int[][] intervals) {
        List<int[]> result = new();
        Array.Sort(intervals, (a, b) => a[0].CompareTo(b[0]));
        result.Add(intervals[0]);

        for (int i = 1; i < intervals.Length; i++) {
            int[] curr = intervals[i];
            int[] prev = result[result.Count - 1];

            if (prev[1] >= curr[0]) {
                prev[1] = Math.Max(prev[1], curr[1]);
            } else {
                result.Add(curr);
            }
        }

        return result.ToArray();
    }
}