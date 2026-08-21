class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if (gas.reduce((curr, acc) => curr + acc) < cost.reduce((curr, acc) => curr + acc)) return -1;


        let startIndex = 0;
        let i = 0;
        let res = 0;
        while (i < gas.length) {
            res += gas[i] - cost[i];

            if (res < 0) {
                res = 0;
                startIndex = i + 1;
            }

            i++;
        }
        
        return startIndex;
    }
}
