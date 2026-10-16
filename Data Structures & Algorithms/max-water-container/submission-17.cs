public class Solution {
    public int MaxArea(int[] heights) {
        int result = 0;
        int l = 0, r = heights.Length - 1;

        while (l < r) {
            int height = Math.Min(heights[l], heights[r]);
            int width = r - l;
            result = Math.Max(result, height * width);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return result;
    }
}
