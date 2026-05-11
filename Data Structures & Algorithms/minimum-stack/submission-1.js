class MinStack {
    min = 0;
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.min = val;
        } else {
            this.min = Math.min(this.min, val);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const min = this.min;
        const removedItem = this.stack.pop();
        if (removedItem === min) {
            this.min = Math.min(...this.stack);
        }
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
        return this.min;
    }
}
