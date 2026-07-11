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
        const n = height.length;
        let lefts = new Array(height.length).fill(0);
        let rights = new Array(height.length).fill(0);
        let totalWater = 0;

        lefts[0] = height[0];
        rights[n - 1] = height[n - 1];

        for (let i = 1; i < n; i++) {
            lefts[i] = Math.max(lefts[i - 1], height[i]);
        }

        for (let i = n - 2; i >= 0; i--) {
            rights[i] = Math.max(rights[i + 1], height[i]);
        }

        for (let i = 0; i < n; i++) {
            let currentWater =+ Math.min(lefts[i], rights[i]) - height[i];
            if (currentWater > 0) {
                totalWater += currentWater
            }
        }

        return totalWater;
    }
}
