class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinPriorityQueue();
        
        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);

        if (this.heap.size() > this.k) {
            this.heap.dequeue();
        }

        return this.heap.front();        
    }
}