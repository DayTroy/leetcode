class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    // [1,4,3,2]

    // [1,2,3,4]
    minEatingSpeed(piles, h) {
        let speed = 1;

        while (true) {
            let time = 0;

            for (let pile of piles) {
                time += Math.ceil(pile / speed);
            }

            if (time <= h) {
                return speed;
            }
            speed++;
        }
    }
}
