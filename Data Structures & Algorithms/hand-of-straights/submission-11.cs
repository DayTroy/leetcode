public class Solution {
    public bool IsNStraightHand(int[] hand, int groupSize) {
        if (hand.Length % groupSize != 0) return false;

        var frequency = new Dictionary<int, int>();

        foreach (var item in hand) {
            frequency[item] = frequency.GetValueOrDefault(item, 0) + 1;
        }

        var cards = frequency.Keys.ToArray();

        Array.Sort(cards);

        foreach (var card in cards) {
            var needed = frequency[card];

            if (needed > 0) {
                for (int i = card; i < card + groupSize; i++) {
                    if (!frequency.TryGetValue(i, out int curr) || needed > curr) return false;

                    frequency[i] = curr - needed;
                }
            }
        }

        return true;
    }
}
