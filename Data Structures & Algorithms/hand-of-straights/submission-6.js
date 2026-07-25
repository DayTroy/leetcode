class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const frequency = new Map();

        for (let h of hand) {
            frequency.set(h, (frequency.get(h) || 0) + 1);
        }

        const nums = Array.from(frequency.keys()).sort((a, b) => a - b);

        for (let num of nums) {
            const count = frequency.get(num);
            if (count > 0) {
                for (let i = 0; i < groupSize; i++) {
                    const curr = frequency.get(num + i) || 0;
                    if (curr < count) return false;
                    frequency.set(num + i, curr - count);
                }
            }
        }

        return true;
    }
}
