class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let num = 1;
        const res = [0];

        while (num <= n) {
            let temp = num;
            let count = 0;
            while (temp > 0) {
                if (temp % 2 === 1) count++
                temp = temp >> 1;
            }
            res.push(count);
            num++;
        }

        return res;
    }
}
