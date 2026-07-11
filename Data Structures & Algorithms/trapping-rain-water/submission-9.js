class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // [0,2,0,3,1,0,1,3,2,1]
    //. l                 r
    // [2,2,2,3,3,3,3,3,3,3]
    // [3,3,3,3,3,3,3,3,3,3]
    // []
    trap(height) {
        let l = 0;
        let r = height.length - 1;

        let maxLeft = height[l];
        let maxRight = height[r];
        let totalWater = 0;

        while (l < r) {
            if (maxLeft < maxRight) {
                l++;
                maxLeft = Math.max(maxLeft, height[l]);
                totalWater += maxLeft - height[l];
            } else {
                r--;
                maxRight = Math.max(maxRight, height[r]);
                totalWater += maxRight - height[r];
            }
        }

        return totalWater;
    }
}
