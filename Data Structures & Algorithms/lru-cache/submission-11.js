class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.store.has(key)) return -1;

        const value = this.store.get(key);
        this.store.delete(key);
        this.store.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.store.has(key)) {
            this.store.delete(key);
        } else if (this.store.size >= this.capacity) {
            this.store.delete(this.store.keys().next().value);
        }
        
        this.store.set(key, value);
    }
}
