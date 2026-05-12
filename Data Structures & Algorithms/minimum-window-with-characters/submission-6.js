class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const freqT = new Map();
        const freqS = new Map();

        for (let char of t) {
            freqT.set(char, (freqT.get(char) || 0) + 1);
        }

        let have = 0, need = freqT.size;
        let minWindowLen = Infinity;
        let positions = [-1, 62];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const char = s[r];
            freqS.set(char, (freqS.get(char) || 0) + 1);

            if (freqT.has(char) && freqS.get(char) === freqT.get(char)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < minWindowLen) {
                    minWindowLen = r - l + 1;
                    positions = [l, r];
                }
                freqS.set(s[l], freqS.get(s[l]) - 1);
                if (freqT.has(s[l]) && freqS.get(s[l]) < freqT.get(s[l])) {
                    have--;
                }
                l++;
            }
        }

        return minWindowLen === Infinity ? '' : s.slice(positions[0], positions[1] + 1);
    }
}
