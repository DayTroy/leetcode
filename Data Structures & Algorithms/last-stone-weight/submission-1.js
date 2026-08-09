class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b);
            const last = stones.length - 1;
            const beforeLast = last - 1;
            const remain = stones[last] - stones[beforeLast];

            if (remain === 0) {
                stones.pop();
                stones.pop();
            } else {
                stones[beforeLast] = remain;
                stones.pop();
            }
        }

        return stones.length > 0 ? stones[0] : 0;
    }
}
