class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tMap = new Map();
        const window = new Map();
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        let have = 0, need = tMap.size;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];
            window.set(char, (window.get(char) || 0) + 1);

            if (tMap.has(char) && window.get(char) === tMap.get(char)) {
                have += 1;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                window.set(s[l], window.get(s[l]) - 1);

                if (window.get(s[l]) < tMap.get(s[l])) {
                    have -= 1;
                }

                l++;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
