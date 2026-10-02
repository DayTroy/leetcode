public class Solution {
    public bool IsNStraightHand(int[] hand, int groupSize) {
        if (hand.Length % groupSize != 0) return false;

        var frequency = new Dictionary<int, int>();

        foreach (var card in hand) {
            frequency[card] = frequency.GetValueOrDefault(card, 0) + 1;
        }

        var arr = frequency.Keys.ToArray();

        Array.Sort(arr);

        foreach (var card in arr) {
            if (frequency[card] > 0) {
                int needed = frequency[card];

                for (int i = card; i < card + groupSize; i++) {
                    var hasValue = frequency.TryGetValue(i, out var curr);

                    if (!hasValue || needed > curr) return false;

                    frequency[i] = curr - needed;
                }
            }
        }

        return true;
    }
}
