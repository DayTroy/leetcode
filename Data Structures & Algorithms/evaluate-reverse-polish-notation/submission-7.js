class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       const res = [];

        for (let token of tokens) {
            if (!isNaN(Number(token))) {
            res.push(Number(token));
        } else {
            // Извлекаем операнды
            const b = res.pop(); 
            const a = res.pop(); 
            
            switch (token) {
                case '+': 
                    res.push(a + b); 
                    break;
                case '-': 
                    res.push(a - b); // Правильный порядок: a минус b
                    break;
                case '*': 
                    res.push(a * b); 
                    break;
                case '/': 
                    // Правильный порядок: a разделить на b
                    res.push(Math.trunc(a / b)); 
                    break;
            }
            }
        }

        return res[0];
    }
}
