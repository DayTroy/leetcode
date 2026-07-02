class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // ["Hello","World"]
    // '5#Hello5#World'
    encode(strs) {
        return strs.map(str => str.length.toString() + '#' + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let answer = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const size = parseInt(str.substring(i, j));
            answer.push(str.substr(j + 1, size));
            i = size + j + 1;
        }

        return answer;
    }
}
