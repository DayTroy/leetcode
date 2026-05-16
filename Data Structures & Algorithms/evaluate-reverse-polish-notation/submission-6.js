class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       const res = [];

        for (let token of tokens) {
            if (token === '+' || token === '-' || token === '/' || token === '*') {
                const [b, a] = [res.pop(), res.pop()];

                switch (token) {
                    case '+':
                        res.push(a + b);
                        break;
                    case '-':
                        res.push(a - b);
                        break;
                    case '*':
                        res.push(a * b);
                        break;
                    default:
                        res.push(Math.trunc(a / b));
                        break;
                }
            } else {
                res.push(Number(token));
            }
        }

        return res[0];
    }
}
