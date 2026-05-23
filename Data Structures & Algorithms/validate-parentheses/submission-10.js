class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const check = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for (let char of s) {
            if (char === ')' || char === '}' || char === ']') {
                if (check[char] !== stack.pop()) return false;
            } else {
                stack.push(char);
            }
        }

        if (stack.length > 0) return false;

        return true;
    }
}
