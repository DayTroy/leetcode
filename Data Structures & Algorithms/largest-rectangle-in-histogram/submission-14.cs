public class Solution {
    public int LargestRectangleArea(int[] heights) {
        Stack<int> stack = new();
        int result = 0;
        
        for (int i = 0; i <= heights.Length; i++) {
            int currentHeight = (i == heights.Length) ? 0 : heights[i];
            while (stack.Count != 0 && heights[stack.Peek()] > currentHeight) {
                int height = heights[stack.Pop()];
                int width = stack.Count == 0 ? i : i - stack.Peek() - 1;
                
                result = Math.Max(result, height * width);
            }
            stack.Push(i);
        }

        return result;
    }
}
