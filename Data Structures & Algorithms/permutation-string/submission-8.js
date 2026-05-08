class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    // Input: s1 = "abc", s2 = "lecabee"

    checkInclusion(s1, s2) {
        const freq1 = new Map();

        for (let char of s1) {
            freq1.set(char, (freq1.get(char) || 0) + 1);
        }

        const unique = freq1.size;

        for (let i = 0; i < s2.length; i++) {
            const freq2 = new Map();
            let count = 0;

            for (let j = i; j < s2.length; j++) {
                if (!freq1.has(s2[j])) break;

                freq2.set(s2[j], (freq2.get(s2[j]) || 0) + 1);

                if (freq1.get(s2[j]) < freq2.get(s2[j])) break;

                if (freq1.get(s2[j]) === freq2.get(s2[j])) {
                    count++;
                }                

                if (count === unique) return true;
            }
        }

        return false
    }
}
