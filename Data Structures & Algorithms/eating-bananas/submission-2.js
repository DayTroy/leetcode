class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minSpeed = 1;

        while (true) {
            let totalHours = 0;

            for (let pile of piles) {
                totalHours += Math.ceil(pile / minSpeed);
            }

            if (totalHours <= h) {
                return minSpeed;
            }
            minSpeed++;
        }
    }
}
