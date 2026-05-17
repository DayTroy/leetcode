class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles);;
        let minSpeed = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / k);
            }

            if (hours <= h) {
                minSpeed = Math.min(minSpeed, k);
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return minSpeed;
    }
}
