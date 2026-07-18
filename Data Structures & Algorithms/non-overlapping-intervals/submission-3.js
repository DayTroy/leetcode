class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    // [[1,2], [2,4], [1,4]]
    // [[2,1], [4,2], [4,1]]


    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let end = intervals[0][1]
        let removeCount = 0;
        
        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];

            if (end > curr[0]) {
                removeCount++;
            } else {
                end = curr[1];
            }
        }
        return removeCount;
    }
}
