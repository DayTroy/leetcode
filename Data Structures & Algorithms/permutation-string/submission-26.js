class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map();

        for (let str of s1) {
            s1Map.set(str, (s1Map.get(str)|| 0) + 1);
        }

        const need = s1Map.size;

        for (let i = 0; i < s2.length; i++) {
            const s2Map = new Map();
            let have = 0;

            for (let j = i; j < s2.length; j++) {
                const char = s2[j];
                s2Map.set(char, (s2Map.get(char) || 0) + 1);

                if ((s1Map.get(char) || 0) < s2Map.get(char)) break;

                if (s1Map.get(char) === s2Map.get(char)) {
                    have++;
                }

                if (have === need) return true;
            }
        }

        return false;
    }
}
