class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const data = new Set();
        while (true) {
            let arr = String(n).split('');
            let sum = 0;
            for (let item of arr) {
                sum += Math.pow(Number(item), 2);
            }
            if (sum === 1) return true;
            if (data.has(sum)) return false;
            data.add(sum);
            n = sum;
        }
    }
}
