class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length > 0) {
            const minValue = Math.min(val, this.getMin())
            this.minStack.push(minValue);
        } else {
            this.minStack.push(val);
        }
    }
    /**
     * @return {void}
     */
    pop () {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */

    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
