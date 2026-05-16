class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // [30,38,30,36,35,40,28]
    // [30]
    38
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const [stackValue, stackIndex] = stack.pop();
                result[stackIndex] = i - stackIndex;
            }
            stack.push([temperatures[i], i]);
        }
        // for (let [i, temperature] of temperatures.entries()) {
            
        // }
        return result;
    }
}
