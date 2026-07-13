class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // s1 = "abc", s2 = "lecabee"

    checkInclusion(s1, s2) {
        const s1Map = new Map();

        for (let char of s1) {
            s1Map.set(char, (s1Map.get(char) || 0) + 1);
        }
        
        const need = s1Map.size;
        for (let i = 0; i < s2.length; i++) {
            const s2Map = new Map();
            let curr = 0;

            for (let j = i; j < s2.length; j++) {
                const char = s2[j];

                s2Map.set(char, (s2Map.get(char) || 0) + 1);

                if (!s1Map.has(char) || s2Map.get(char) > s1Map.get(char)) break;

                if (s1Map.get(char) === s2Map.get(char)) {
                    curr++;
                }

                if (curr === need) return true;
            }
        }

        return false;
    }
}
