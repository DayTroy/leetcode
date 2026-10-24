public class Solution {
    public int MinEatingSpeed(int[] piles, int h) {
        int l = 0;
        int r = piles.Max();
        int speed = r;
        
        while (l <= r) {
            int m = (l + r) / 2;
            double time = 0;

            foreach(int pile in piles) {
                time += Math.Ceiling((double)pile / m);
            }
            if (time <= h) {
                r = m - 1;
                speed = m;
            } else {
                l = m + 1;
            }
        }

        return speed;
    }
}
