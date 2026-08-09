class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    // [1, 2, 3, 3, 3, 5, 6, 7]
    constructor(k, nums) {
        this.kthLargest = k;
        this.heap = nums.sort((a, b) => a - b);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
        return this.heap[this.heap.length - this.kthLargest];
    }
}
