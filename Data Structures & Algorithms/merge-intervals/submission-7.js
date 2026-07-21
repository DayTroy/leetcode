class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    // [[1,3],[1,5],[6,7]]
    // 

    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];

            if (interval[0] <= res[res.length - 1][1]) {
                res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1])
            } else {
                res.push(interval);
            }
        }

        return res;
    }
}
