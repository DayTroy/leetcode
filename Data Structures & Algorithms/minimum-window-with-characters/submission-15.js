class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let resLen = Infinity;
        let res = [-1, -1];

        const tMap = new Map();
        for (const str of t) {
            tMap.set(str, (tMap.get(str) || 0) + 1);
        }
        const need = tMap.size;
        
        let have = 0;
        let l = 0;
        const window = new Map();
        for (let r = 0; r < s.length; r++) {
            window.set(s[r], (window.get(s[r]) || 0) + 1);

            if (tMap.has(s[r]) && window.get(s[r]) === tMap.get(s[r])) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window.set(s[l], (window.get(s[l]) || 0) - 1);

                if (tMap.get(s[l]) > window.get(s[l])) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
