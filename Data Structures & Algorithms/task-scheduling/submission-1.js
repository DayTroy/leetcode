class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const frequency = new Map();
        for (const task of tasks) {
            frequency.set(task, (frequency.get(task) || 0) + 1);
        }

        const heap = new MaxPriorityQueue();

        for (const [, value] of frequency) {
            heap.enqueue(value);
        }

        const cooldown = [];
        let time = 0;

        while (heap.size() > 0 || cooldown.length > 0) {
            time++;

            if (heap.size() > 0) {
                const currentCount = heap.dequeue();
                const remainingCount = currentCount - 1;

                if (remainingCount > 0) {
                    cooldown.push([remainingCount, time + n]);
                }
            }

            if (cooldown.length > 0 && cooldown[0][1] === time) {
                const [nextCount, _] = cooldown.shift();
                heap.enqueue(nextCount);
            }
        }

        return time;
    }

}
