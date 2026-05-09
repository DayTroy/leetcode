class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    // Input: s1 = "abc", s2 = "lecabee"

    checkInclusion(s1, s2) {
        const freq1 = new Map();
        const freq2 = new Map();

        for (let char of s1) {
            freq1.set(char, (freq1.get(char) || 0) + 1)
        }

        const unique = freq1.size;
        let l = 0, count = 0;

        for (let r = 0; r < s2.length; r++) {
            let char = s2[r];

            if (freq1.has(char)) {
                freq2.set(char, (freq2.get(char) || 0) + 1);
                if (freq2.get(char) === freq1.get(char)) count++;
            }

            if (r - l + 1 > s1.length) {
                let leftChar = s2[l];
                if (freq2.has(leftChar)) {
                    if (freq2.get(leftChar) === freq1.get(leftChar)) count--;
                    freq2.set(leftChar, freq2.get(leftChar) - 1);
                }
                l++;
            }

            if (count === unique) return true;
        }
        
        return false;
    }
}
