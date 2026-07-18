class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const data = new Map();

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join(',');

            if (data.has(key)) {
                data.set(key, [...data.get(key), str])
            } else {
                data.set(key, [str]);
            }
        }

        return [...data.values()]
    }
}
