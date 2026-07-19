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
     * @returns {boolean}
     */
    // [(0,30),(5,10),(15,20)]

    // [(5,10),(15,20),(0,30)]

    canAttendMeetings(intervals) {
        if (intervals.length === 0) return true;

        intervals.sort((a, b) => a.end - b.end);

        let end = intervals[0].end;

        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];

            if (curr.start < end) {
                return false;
            }

            end = curr.end;
        }

        return true;
    }
}
