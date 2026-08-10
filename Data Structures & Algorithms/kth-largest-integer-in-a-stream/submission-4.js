class MinHeap {
    constructor() {
        this.heap = [];
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

            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]];

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
        const heapSize = this.size();
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < heapSize && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < heapSize && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();

        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.insert(val);

        if (this.heap.size() > this.k) {
            this.heap.poll();
        }

        return this.heap.peek();
    }
}