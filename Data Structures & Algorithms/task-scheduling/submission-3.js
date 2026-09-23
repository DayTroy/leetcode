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

        for (const [key, value] of frequency) {
            heap.enqueue(value);
        }

        let time = 0;
        const cooldowns = [];
        
        while (heap.size() > 0 || cooldowns.length > 0) {
            time++;
            if (heap.size() > 0) {
                let value = heap.dequeue();
                value--;
                if (value > 0) {
                    cooldowns.push([value, time + n]);
                }
            }

            if (cooldowns.length > 0 && cooldowns[0][1] === time) {
                heap.enqueue(cooldowns.shift()[0]);
            }
        }

        return time;

    }
}
