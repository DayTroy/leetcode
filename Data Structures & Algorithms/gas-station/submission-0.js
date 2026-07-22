class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        for (let start = 0; start < gas.length; start++) {
            let currentGas = 0;
            let isSuccessful = true;

            for (let step = 0; step < gas.length; step++) {
                const currentIndex = (start + step) % gas.length;
                
                currentGas += gas[currentIndex] - cost[currentIndex];

                if (currentGas < 0) {
                    isSuccessful = false;
                    break;
                }
            }

            if (isSuccessful) {
                return start;
            }
        }

        return -1;
    }
}
