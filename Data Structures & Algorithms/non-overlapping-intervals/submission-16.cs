public class Solution {
    public int EraseOverlapIntervals(int[][] intervals) {
        int count = 0;
        Array.Sort(intervals, (a, b) => a[0].CompareTo(b[0]));
        var prev = intervals[0];

        for (int i = 1; i < intervals.Length; i++) {
            int[] curr = intervals[i];

            if (prev[1] > curr[0]) {
                prev[1] = Math.Min(prev[1], curr[1]);
                count++;
            } else {
                prev = curr;
            }
        }

        return count;
    }
}
