class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const data  = new Map();
        const data2 = new Map();

        if (s.length !== t.length) {
            return false
        }

        for (let i = 0; i < s.length; i++) {
            if (data.has(s[i])) {
                data.set(s[i], data.get(s[i]) + 1);
            } else {
                data.set(s[i], 1)
            }

            if (data2.has(t[i])) {
                data2.set(t[i], data2.get(t[i]) + 1);
            } else {
                data2.set(t[i], 1)
            }
        }

        for (const [key, value] of data) {
            if (value !== data2.get(key)) {
                return false;
            }
        }

        return true;
    }
}
