class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    // [[1,2],[2,4],[1,4]]
    // end = 2, 

    // [[0,2],[1,3],[2,4],[3,5],[4,6]]
    // end = 2, 

    // [[1,100],[11,22],[1,11],[2,12]]
    // [[1,11],[2,12],[11,22],[1,100]]

    // [[1,11],[2,12],[11,22],[1,100]]

    // [[1,11],[1,100],[2,12],[11,22]]
    eraseOverlapIntervals(intervals) {
        let removeCount = 0;
        intervals.sort((a, b) => a[1] - b[1]);
        let end = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];

            if (curr[0] < end) {
                removeCount++;
            } else {
                end = curr[1];
            }
        }

        return removeCount;
    }
}
