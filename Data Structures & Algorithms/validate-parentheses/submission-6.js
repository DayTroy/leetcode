class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const check = {
            ')' : '(',
            '}' : '{',
            ']' : '[',
        }
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
                if (check[s[i]] !== stack.pop()) return false;
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
