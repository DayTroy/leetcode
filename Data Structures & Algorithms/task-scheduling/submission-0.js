class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
           const count = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }
        
        const maxFreq = Math.max(...count);

        const maxFreqCount = count.filter(c => c === maxFreq).length;
        
        const ans = (maxFreq - 1) * (n + 1) + maxFreqCount;

        return Math.max(ans, tasks.length); 
    }
}
