class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // [1,4,3,2], h = 9
    // speed = 1;
    // []
    minEatingSpeed(piles, h) {
        let speed = 1;
        while (true) {
            let total = 0;

            for (let pile of piles) {
                total += Math.ceil(pile / speed);
            }

            if (total <= h) {
                return speed;
            }
            
            speed++;
        }
    }
}
