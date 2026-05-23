class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    // [1,4,3,2]

    // [1,2,3,4];

    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles);
        let minSpeed = r;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            let time = 0;

            for (let pile of piles) {
                time += Math.ceil(pile / m);
            }

            if (time <= h) {
                minSpeed = Math.min(minSpeed, m);
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return minSpeed;
    }
}
