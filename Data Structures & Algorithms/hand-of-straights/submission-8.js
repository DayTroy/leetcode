class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const frequency = new Map();

        for (let card of hand) {
            frequency.set(card, (frequency.get(card) || 0) + 1);
        }

        const nums = Array.from(frequency.keys()).sort((a, b) => a - b);

        for (let num of nums) {
            const count = frequency.get(num);

            if (count > 0) {
                for (let i = 0; i < groupSize; i++) {
                    const currCount = frequency.get(num + i) || 0;

                    if (currCount < count) return false;

                    frequency.set(num + i, currCount - count);
                }
            }
        }

        return true;
    }
}
