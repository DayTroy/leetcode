public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k) {
        var queue = new LinkedList<int>();
        var result = new List<int>();
        int l = 0, r = 0;

        while (r < nums.Length) {
            while (queue.Count > 0 && nums[queue.Last.Value] < nums[r]) {
                queue.RemoveLast();
            }
            queue.AddLast(r);

            if (l > queue.First.Value) {
                queue.RemoveFirst();
            }

            if (r - l + 1 >= k) {
                result.Add(nums[queue.First.Value]);
                l++;
            }
            r++;
        }
        
        return result.ToArray();
    }
}
