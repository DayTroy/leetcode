class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    // [[1,2],[2,4],[1,4]]
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let removeCount = 0;
        let end = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];

            if (interval[0] < end) {
                removeCount++;
            } else {
                end = interval[1];
            }
        }

        return removeCount;
    }
}
