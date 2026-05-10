class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const sums = [];

        let nStr = n.toString();
        let currentSum = 0; 

        while (true) {
            currentSum = nStr
                .split('')
                .map(item => parseInt(item))
                .reduce((acc, prev) => acc + prev ** 2, 0);

            if (currentSum === 1) return true;

            if (sums.includes(currentSum)) return false;
            sums.push(currentSum);
            nStr = currentSum.toString();
        }
    }
}
