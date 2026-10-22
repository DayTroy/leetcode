public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        Stack<int[]> stack = new();
        List<int> result = Enumerable.Repeat(0, temperatures.Length).ToList();

        for (int i = 0; i < temperatures.Length; i++) {
            while (stack.Count > 0 && stack.Peek()[1] < temperatures[i]) {
                var popped = stack.Pop();
                result[popped[0]] = i - popped[0];
            }
            int[] item = { i, temperatures[i] };
            stack.Push(item);
        }

        return result.ToArray();
    }
}
