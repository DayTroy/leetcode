class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue(); 
        this.minHeap = new MinPriorityQueue(); 
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);

        this.minHeap.enqueue(this.maxHeap.dequeue());

        if (this.maxHeap.size() < this.minHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
        
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }

        const a = this.maxHeap.front();
        const b = this.minHeap.front();

        return (a + b) / 2;
    }
}
