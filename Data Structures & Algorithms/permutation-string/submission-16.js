class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // s1 = "abc", s2 = "lecabee"

    checkInclusion(s1, s2) {
        const freq1 = new Map();
        const freq2 = new Map();

        for (let char of s1) {
            freq1.set(char, (freq1.get(char) || 0) + 1);
        }

        const need = freq1.size;
        let count = 0;
        let l = 0;

        for (let r = 0; r < s2.length; r++) {
            const char = s2[r];

            freq2.set(char, (freq2.get(char) || 0) + 1);

            if (freq1.has(char)) {
                if (freq1.get(char) === freq2.get(char)) {
                    count++;
                }
            }

            if (r - l + 1 > s1.length) {
                let leftChar = s2[l];
                if (freq2.has(leftChar)) {
                    if (freq2.get(leftChar) === freq1.get(leftChar)) count--;
                    freq2.set(leftChar, freq2.get(leftChar) - 1);
                }
                l++;
            }
            
            if (need === count) return true;
        }

        return false;
    }
}
