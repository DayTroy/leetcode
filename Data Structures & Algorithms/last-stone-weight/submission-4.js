class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();

        for (const stone of stones) {
            heap.enqueue(stone);
        }

        while (heap.size() > 1) {
            const a = heap.dequeue();
            const b = heap.dequeue();

            if (a != b) {
                heap.enqueue(a - b);
            }
        }

        return heap.size() > 0 ? heap.dequeue() : 0
    }
}
