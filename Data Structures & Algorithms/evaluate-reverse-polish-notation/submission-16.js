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
                const a = stack.pop();
                const b = stack.pop();

                switch(token) {
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(b - a);
                        break;
                    case '*':
                        stack.push(a * b);
                        break;
                    case '/':
                        stack.push(Math.trunc(b / a));
                        break;
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}
