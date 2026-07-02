class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // ["act","pots","tops","cat","stop","hat"]

    groupAnagrams(strs) {
        const data = new Map();

        for (let str of strs){
            const key = [...str].toSorted().join('');
            if (data.has(key)) {
                data.set(key, [...data.get(key), str])
            } else {
                data.set(key, [str]);
            }
        }



        return [...data.values()];
    }
}
