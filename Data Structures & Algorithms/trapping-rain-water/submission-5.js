class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // [0,2,0,3,1,0,1,3,2,1]

    // [2,2,2,3,3,3,3,3,3,3]
    // [3,3,3,3,3,3,3,3,3,3]
    // []
    trap(height) {
        const lefts = new Array(height.length).fill(0);
        const rights = new Array(height.length).fill(0);
        const n = height.length;

        lefts[0] = height[0];
        rights[n - 1] = height[n - 1];

        for (let i = 1; i < n; i++) {
            lefts[i] = Math.max(height[i], lefts[i - 1]);
        }

        for (let i = n - 2; i >= 0; i--) {
            rights[i] = Math.max(height[i], rights[i + 1]);
        }

        let totalWater = 0;

        for (let i = 0; i < n; i++) {
            const currentWater = Math.min(lefts[i], rights[i]) - height[i];

            if (currentWater > 0) {
                totalWater += currentWater;
            }
        }

        return totalWater;
    }
}
