class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // piles = [1,4,3,2], h = 9
    // [2 + 2 + 2 + 2 + 2 + 2] = 6;
    //
    minEatingSpeed(piles, h) {
        let minSpeed = 1;
        
        while (true) {
            let total = 0;

            for (let pile of piles) {
                total += Math.ceil(pile / minSpeed);
            }

            if (total <= h) break;
            minSpeed++;
        }

        return minSpeed;
    }
}
