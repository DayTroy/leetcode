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
        let left = 0;
        let right = height.length - 1;
        let maxL = 0;
        let maxR = 0;
        let totalWater = 0;

        while (left < right) {
            // Обновляем максимумы
            maxL = Math.max(maxL, height[left]);
            maxR = Math.max(maxR, height[right]);

            if (height[left] < height[right]) {
                totalWater += Math.min(maxL, maxR) - height[left];
                left++;
            } else {
                totalWater += Math.min(maxL, maxR) - height[right];
                right--;
            }
        }

        return totalWater;
    }
}
