public class MinStack {
    private Stack<int> _stack;
    private Stack<int> _minStack;

    public MinStack() {
        this._stack = new Stack<int>();
        this._minStack = new Stack<int>();
    }

    public void Push(int val) {
        this._stack.Push(val);
        if (this._minStack.Count > 0) {
            int min = Math.Min(this._minStack.Peek(), val);
            this._minStack.Push(min);
        } else {
            this._minStack.Push(val);
        }
    }
    
    public void Pop() {
        this._stack.Pop();
        this._minStack.Pop();
    }
    
    public int Top() {
        return this._stack.Peek();
    }
    
    public int GetMin() {
        return this._minStack.Peek();
    }
}
