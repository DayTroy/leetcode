class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if (gas.reduce((acc, curr) => acc + curr) < cost.reduce((acc, curr) => acc + curr)) return -1;

        let i = 0;
        let startIndex = 0;
        let sum = 0;

        while (i < gas.length) {
            sum += gas[i] - cost[i];

            if (sum < 0) {
                sum = 0;
                startIndex = i + 1;
            }
            i++;
        }

        return startIndex;
    }
}
