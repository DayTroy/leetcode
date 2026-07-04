class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // piles = [1,4,3,2], h = 9
    // [2 + 2 + 2 + 2 + 2 + 2] = 6;

    // [1,2,3,4,5,6,7,8,9,10]
    //          
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let minSpeed = r;

        while (l <= r) {
            let total = 0;
            let m = Math.floor((l + r) / 2);
            
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
