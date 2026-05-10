class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";
        const freqT = new Map();

        for (let char of t) {
            freqT.set(char, (freqT.get(char) || 0) + 1)
        }
        
        const window = new Map();
        let have = 0;
        let need = freqT.size;
        let positions = [-1, -1];
        let windowLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            window.set(s[r], (window.get(s[r]) || 0) + 1);

            if ((freqT.has(s[r])) && freqT.get(s[r]) === window.get(s[r])) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < windowLen) {
                    windowLen = r - l + 1;
                    positions = [l, r];
                }

                window.set(s[l], window.get(s[l]) - 1);
                if (freqT.has(s[l]) && freqT.get(s[l]) > window.get(s[l])) {
                    have--;
                }
                l++
            }
        }

        return windowLen === Infinity ? '' : s.slice(positions[0], positions[1] + 1) 
    }
}
