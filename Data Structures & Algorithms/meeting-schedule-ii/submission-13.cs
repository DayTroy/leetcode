/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

public class Solution {
    public int MinMeetingRooms(List<Interval> intervals) {
        List<int> start = intervals
            .OrderBy(x => x.start)
            .Select(x => x.start)
            .ToList();

        List<int> end = intervals
            .OrderBy(x => x.end)
            .Select(x => x.end)
            .ToList();

        int l = 0, r = 0;
        int res = 0;
        int count = 0;
        while (l < intervals.Count && r < intervals.Count) {
            if (start[l] < end[r]) {
                count++;
                l++;
            } else {
                count--;
                r++;
            }
            res = Math.Max(res, count);
        }

        return res;
    }
}
