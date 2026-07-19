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
        let area = 0;
        let [leftMax, rightMax] = [height[l], height[r]]

        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                area += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                area += rightMax - height[r];
            }
        }

        return area;
    }
}
