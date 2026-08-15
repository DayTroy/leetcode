class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let lMax = 0;
        let rMax = 0;
        let water = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                lMax = Math.max(lMax, height[l]);
                water += lMax - height[l];
                l++;
            } else {
                rMax = Math.max(rMax, height[r]);
                water += rMax - height[r];
                r--;
            }
        }

        return water;
    }
}
