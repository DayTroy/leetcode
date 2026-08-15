class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const lMax = Array(height.length).fill(0);
        const rMax = Array(height.length).fill(0);

        for (let i = 1; i < height.length; i++) {
            lMax[i] = Math.max(lMax[i - 1], height[i - 1]);
        }

        for (let i = height.length - 2; i >= 0; i--) {
            rMax[i] = Math.max(rMax[i + 1], height[i + 1]);
        }

        let totalWater = 0;
        for (let i = 0; i < height.length; i++) {
            const value = Math.min(lMax[i], rMax[i]) - height[i];
            
            if (value > 0) {
                totalWater += value;
            }
        }

        return totalWater;
    }
}
