class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // s1 = "abc", s2 = "lecabee"

    checkInclusion(s1, s2) {
        const freq1 = new Map();

        for (let char of s1) {
            freq1.set(char, (freq1.get(char) || 0) + 1);
        }

        const need = freq1.size;

        for (let i = 0; i < s2.length; i++) {
            const freq2 = new Map();
            let count = 0;
            for (let j = i; j < s2.length; j++) {
                const char = s2[j];

                if (!freq1.has(char)) break;

                freq2.set(char, (freq2.get(char) || 0) + 1);

                if (freq1.get(char) < freq2.get(char)) {
                    break;
                }

                if (freq1.get(char) === freq2.get(char)) {
                    count++;
                }
                
                if (need === count) return true;
            }
        }

        return false;
    }
}
