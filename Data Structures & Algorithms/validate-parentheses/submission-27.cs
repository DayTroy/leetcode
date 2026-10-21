public class Solution {
    public bool IsValid(string s) {
        Dictionary<char, char> check = new() {
            ['('] = ')',
            ['{'] = '}',
            ['['] = ']',
        };
        var stack = new Stack<char>();

        foreach (char ch in s) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.Push(ch);
            } else if (ch == ')' || ch == ']' || ch == '}') {
                if (stack.Count == 0) return false;
                if (check[stack.Pop()] != ch) return false;
            }
        }

        return stack.Count == 0;
    }
}
