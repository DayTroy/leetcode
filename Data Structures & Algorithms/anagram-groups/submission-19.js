class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const data = new Map();

        for (const str of strs) {
            const key = str.split('').toSorted().join('');
            if (data.has(key)) {
                data.get(key).push(str);
            } else {
                data.set(key, [str]);
            }
        }

        return [...data.values()];
    }
}
