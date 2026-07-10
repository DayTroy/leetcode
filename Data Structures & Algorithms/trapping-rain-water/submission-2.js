class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        
        for (let i = 0; i < height.length; i++) {
            let maxLeft = 0;
            let maxRight = 0;

            for (let l = 0; l <= i; l++) {
                maxLeft = Math.max(maxLeft, height[l]);
            }

            for (let r = i; r < height.length; r++) {
                maxRight = Math.max(maxRight, height[r]);
            }

            let currentWater = Math.min(maxLeft, maxRight) - height[i];
        
            if (currentWater > 0) {
                totalWater += currentWater;
            }
        }

        return totalWater;
    }
}
