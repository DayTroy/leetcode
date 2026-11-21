public class Solution {
    public int EraseOverlapIntervals(int[][] intervals) {
        int count = 0;
        Array.Sort(intervals, (a, b) => a[1].CompareTo(b[1]));
        var prevEnd = intervals[0][1];

        for (int i = 1; i < intervals.Length; i++) {
            int[] curr = intervals[i];

            if (curr[0] < prevEnd) {
                count++;
            } else {
                prevEnd = curr[1];
            }
        }

        return count;
    }
}
