class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        const sizes = [];

        for (const str of strs) {
            sizes.push(str.length);
        }

        return sizes.join(',') + '#' + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return [];
        const sizes = str.slice(0, str.indexOf('#')).split(',').map(item => parseInt(item));

        const res = [];
        let startIndex = str.indexOf('#') + 1;
        for (const size of sizes) {
            const item = str.substr(startIndex, parseInt(size));
            res.push(item);
            startIndex += size;
        }
    
        return res;
    }
}
