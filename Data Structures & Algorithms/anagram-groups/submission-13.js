class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for (let str of strs) {
            const count = new Array(26).fill(0);
            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (res.has(key)) {
                res.set(key, [...res.get(key), str]);
            } else {
                res.set(key, [str]);
            }
        }

        return [...res.values()];
    }
}
