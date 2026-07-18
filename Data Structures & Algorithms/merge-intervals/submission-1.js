class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];
        
        for (let i = 1; i < intervals.length; i++) {
            const lastAdded = res[res.length - 1];
            const curr = intervals[i];

            if (lastAdded[1] >= curr[0]) {
                lastAdded[1] = Math.max(lastAdded[1], curr[1]);
            } else {
                res.push(curr);
            }
        }
        return res;
    }
}
