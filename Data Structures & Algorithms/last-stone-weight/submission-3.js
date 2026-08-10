class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const queue = new MaxPriorityQueue();

        for (const stone of stones) {
            queue.enqueue(stone);
        }

        while (queue.size() > 1) {
            const a = queue.dequeue();
            const b = queue.dequeue();
            
            if (a !== b) {
                queue.enqueue(a - b);
            }
        }

        return queue.size() === 1 ? queue.front() : 0;
    }
}
