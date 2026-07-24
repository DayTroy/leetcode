class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    // hand = [1,2,4,2,3,5,3,4], groupSize = 4
    isNStraightHand(hand, groupSize) {
        const frequency = new Map();

        for (let num of hand) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        const nums = Array.from(frequency.keys()).sort((a, b) => a - b);

        for (let num of nums) {
            const count = frequency.get(num);

            if (count > 0) {
                for (let i = 0; i < groupSize; i++) {
                    const curr = frequency.get(num + i) || 0;

                    if (curr < count) return false;

                    frequency.set(num + i, curr - count)
                } 
            }
        }

        return true;
    }
}
