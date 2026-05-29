class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const check = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        };

        const stack = [];

        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else if (check[char] !== stack.pop()) {
                return false;
            }
        }

        return stack.length === 0;   
    }
}
