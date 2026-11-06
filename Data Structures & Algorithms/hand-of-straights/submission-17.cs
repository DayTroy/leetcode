public class Solution {
    public bool IsNStraightHand(int[] hand, int groupSize) {
        if (hand.Length % groupSize != 0) return false;

        Dictionary<int, int> frequency = new();

        for (int i = 0; i < hand.Length; i++) {
            if (frequency.ContainsKey(hand[i])) {
                frequency[hand[i]]++;
            } else {
                frequency[hand[i]] = 1;
            }
        }

        var arr = frequency.Keys.ToArray();
        Array.Sort(arr);

        foreach (int card in arr) {
            int currCount = frequency[card];

            if (currCount > 0) {
                for (int i = card; i < card + groupSize; i++) {
                    int innerCount;

                    if (frequency.ContainsKey(i)) {
                        innerCount = frequency[i];
                    } else {
                        innerCount = 0;
                    }

                    if (currCount > innerCount) return false;
                    frequency[i] = innerCount - currCount;
                }
            }
        }

        return true;
    }
}
