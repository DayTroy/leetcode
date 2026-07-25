class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while (b !== 0) {
            let carry = (a & b) << 0;
            a = a ^ b;                
            b = carry << 1;
        }
        return a;
    }
}
