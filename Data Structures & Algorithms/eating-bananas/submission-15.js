class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minSpeed = 1;

        while (true) {
            let total = 0;
            for (let pile of piles) {
                total += Math.ceil(pile / minSpeed);
            }

            if (total <= h) return minSpeed;
            minSpeed++;
        }
    }
}
