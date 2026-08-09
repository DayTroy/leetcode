
class MinHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    _bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    poll() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return min;
    }

    _bubbleDown(index) {
        const heapLen = this.heap.length;
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < heapLen && this.heap[left] < this.heap[smallest]) {
                smallest = left;    
            }

            if (right < heapLen && this.heap[right] < this.heap[smallest]) {
                smallest = right;    
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.kthLargest = k;
        this.heap = new MinHeap();
        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.insert(val);

        if (this.heap.size() > this.kthLargest) {
            this.heap.poll(); 
        }

        return this.heap.peek();
    }
}