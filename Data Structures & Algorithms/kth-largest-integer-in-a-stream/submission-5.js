class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    poll() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] < this.heap[index]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    _bubbleDown(index) {
        const size = this.size();
        while (true) {
            let smallest = index;

            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (left < size && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < size && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (index === smallest) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
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