class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */  
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            let prev = res[res.length - 1];

            if (prev[1] >= intervals[i][0]) {
                prev[0] = Math.min(prev[0], intervals[i][0]);
                prev[1] = Math.max(prev[1], intervals[i][1]);
            } else {
                res.push(intervals[i]);
            }
        }

        return res;
    }
}
