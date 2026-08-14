class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sMap = new Map();
        const tMap = new Map();

        for (const sItem of s) {
            sMap.set(sItem, (sMap.get(sItem) || 0) + 1);
        }

        for (const tItem of t) {
            tMap.set(tItem, (tMap.get(tItem) || 0) + 1);
        }

        for (const [key, value] of sMap) {
            if (tMap.get(key) !== value) return false;
        }

        return true;
    }
}
