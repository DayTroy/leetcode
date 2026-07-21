/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map(interval => interval.start).sort((a, b) => a - b);
        let end   = intervals.map(interval => interval.end).sort((a, b) => a - b);
        let l = 0, r = 0;
        let res = 0, count = 0;

        while (l < intervals.length) {
            if (start[l] < end[r]) {
                count++;
                l++;
            } else {
                count--;
                r++;
            }
            res = Math.max(res, count);
        }

        return res;
    }
}
