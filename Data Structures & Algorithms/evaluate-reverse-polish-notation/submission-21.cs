public class Solution {
    public int EvalRPN(string[] tokens) {
        var stack = new Stack<string>();

        foreach (string token in tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int b = int.Parse(stack.Pop());
                int a = int.Parse(stack.Pop());
                switch (token) {
                    case "+":
                        stack.Push((a + b).ToString());
                        break;
                    case "-":
                        stack.Push((a - b).ToString());
                        break;
                    case "*":
                        stack.Push((a * b).ToString());
                        break;
                    case "/":
                        stack.Push((a / b).ToString());
                        break;
                }
            } else {
                stack.Push(token);
            }
        }

        return int.Parse(stack.Peek());
    }
}
