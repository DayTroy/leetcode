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
            const [x, y] = [heap.dequeue(), heap.dequeue()];

            const res = x - y;

            if (res > 0) {
                heap.enqueue(res);
            }
        }

        return heap.size() !== 0 ? heap.dequeue() : 0;
    }
}
