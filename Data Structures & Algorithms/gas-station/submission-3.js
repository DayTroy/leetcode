class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        for (let i = 0; i < gas.length; i++) {
            let isCompleted = true;
            let total = 0;
            for (let j = 0; j < gas.length; j++) {
                const ind = (i + j) % gas.length;
                total += gas[ind] - cost[ind];

                if (total < 0) {
                    isCompleted = false;
                    break;
                } 
            }

            if (isCompleted) return i;
        }

        return -1;
    }
}
