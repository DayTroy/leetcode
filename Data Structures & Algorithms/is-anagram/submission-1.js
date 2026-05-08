class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArr = s.split('').sort();
        const tArr = t.split('').sort();

        for (let i = 0; i < sArr.length; i++) {
            if (tArr[i] !== sArr[i] || sArr.length !== tArr.length) {
                return false
            }
        }

        return true;
    }
}
