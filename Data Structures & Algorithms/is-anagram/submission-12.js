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

        for (let sItem of s) {
            sMap.set(sItem, (sMap.get(sItem) || 0) + 1);
        }

        for (let tItem of t) {
            tMap.set(tItem, (tMap.get(tItem) || 0) + 1);
        }

        for (const [key, value] of sMap) {
            if (value !== tMap.get(key)) return false;
        }

        return true;
    }
}
