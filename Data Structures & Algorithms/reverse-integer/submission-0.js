class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const sign = Math.sign(x); 
        
        const reversed = parseFloat(String(Math.abs(x))
            .split('')
            .reverse()
            .join(''));
        
        const res = reversed * sign;

        if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
            return 0;
        }

        return res;
    }
}
