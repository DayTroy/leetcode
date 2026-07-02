class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // ["Hello","World"]
    // '5,5#HelloWorld'
    encode(strs) {
        if (strs.length === 0) return '';
        const sizes = strs.map(str => str.length).join(',');
        return sizes + '#' + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return [];
        const sizes = str.slice(0, str.indexOf('#')).split(',');
        let startIndex = str.indexOf('#') + 1;

        const res = [];
        for (let size of sizes) {
            res.push(str.substr(startIndex, parseInt(size)));
            startIndex += parseInt(size);
        }
        return res;
    }
}
