public class Solution {
    public int[][] Merge(int[][] intervals) {
        List<int[]> result = new();

        if (intervals.Length == 1) {
            result.Add(intervals[0]);
            return result.ToArray();
        };

        Array.Sort(intervals, (a, b) => a[0].CompareTo(b[0]));

        var prev = intervals[0];

        for (int i = 1; i < intervals.Length; i++) {
            var curr = intervals[i];

            if (prev[1] >= curr[0]) {
                prev[0] = Math.Min(prev[0], curr[0]);
                prev[1] = Math.Max(prev[1], curr[1]);
            } else {
                result.Add(prev);
                prev = curr;
            }
        }   

        result.Add(prev);

        return result.ToArray();
    }
}
