class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const check = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }

        for (let skobka of s) {
            //  s.includes('({[')
            if (skobka === '{' || skobka === '(' || skobka === '[') {
                stack.push(skobka);
            } else if (skobka !== check[stack.pop()]) return false
        }

        return stack.length === 0;
    }
}
