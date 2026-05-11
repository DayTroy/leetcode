class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

        let lowestWindowLen = Infinity;
        let positions = [0, 9];
        let have = 0;
        const freqT = new Map();
        const window = new Map();

        for (let char of t) {
            freqT.set(char, (freqT.get(char) || 0) + 1);
        }

        const need = freqT.size;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            window.set(s[r], (window.get(s[r]) || 0) + 1);

            if (freqT.has(s[r]) && freqT.get(s[r]) === window.get(s[r])) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < lowestWindowLen) {
                    lowestWindowLen = r - l + 1;
                    positions = [l, r];
                }

                window.set(s[l], window.get(s[l]) - 1);
                if (freqT.has(s[l]) && freqT.get(s[l]) > window.get(s[l])) have--;
                l++;
            }
        }

        return lowestWindowLen === Infinity ? "" : s.slice(positions[0], positions[1] + 1);
    }
}
