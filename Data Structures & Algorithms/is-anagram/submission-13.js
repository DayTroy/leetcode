class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sMap = new Map();
        for (let char of s) {
            sMap.set(char, (sMap.get(char) || 0) + 1);
        }
        const tMap = new Map();
        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        for (const [key, value] of sMap) {
            if (value !== tMap.get(key)) return false;
        }

        return true;
    }
}
