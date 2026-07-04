class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let minSpeed = r;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            let total = 0;
            for (let pile of piles) {
                total += Math.ceil(pile / m);
            }
        
            if (total <= h) {
                minSpeed = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return minSpeed;
    }
}
