class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const data = new Map();

        for (let i = 0; i < strs.length; i++) {
            const elem = strs[i].split('').toSorted().join('');
            if (data.has(elem)) {
                data.set(elem, [...data.get(elem), strs[i]])
            } else {
                data.set(elem, [strs[i]]);
            }
        }

        return [...data.values()];
    }
}
