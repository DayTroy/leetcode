class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       const res = [];

        for (let token of tokens) {
            if (token === '+' || token === '-' || token === '/' || token === '*') {
                const b = res.pop();
                const a = res.pop();

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
