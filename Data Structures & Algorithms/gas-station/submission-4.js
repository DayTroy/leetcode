class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if (gas.reduce((acc, curr) => acc + curr) < cost.reduce((acc, curr) => acc + curr)) return -1;

        let total = 0;
        let start = 0;
        for (let i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];

            if (total < 0) {
                total = 0;
                start = i + 1;
            }
        }

        return start;
    }
}
