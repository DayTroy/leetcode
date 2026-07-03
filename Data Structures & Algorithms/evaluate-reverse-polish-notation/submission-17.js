class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let res = 0

        // ["1","2","+","3","*","4","-"]
        // [1, 2]

        for (let token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                const b = stack.pop();
                const a = stack.pop();

                switch(token) {
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(a - b);
                        break;
                    case '*':
                        stack.push(a * b);
                        break;
                    case '/':
                        stack.push(Math.trunc(a / b));
                        break;
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}
