public class Solution {
    public int CarFleet(int target, int[] position, int[] speed) {
        int[][] cars = position
            .Select((p, i) => new int[] { p, speed[i] })
            .OrderByDescending(arr => arr[0])
            .ToArray();
        Stack<double> stack = new();

        foreach (int[] car in cars) {
            double time = (double)(target - car[0]) / car[1];

            if (stack.Count == 0 || stack.Peek() < time) {
                stack.Push(time);
            }
        }

        return stack.Count;
    }
}
