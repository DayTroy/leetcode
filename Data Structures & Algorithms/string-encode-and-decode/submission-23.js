class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // ["Hello","World"]
    // '5#Hello5#World'
    encode(strs) {
        return strs.map(str => str.length + '#' + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const size = parseInt(str.slice(i, j))
            const item = str.substr(j + 1, size);
            res.push(item);
            i = size + j + 1;
        }

        return res;
    }
}
