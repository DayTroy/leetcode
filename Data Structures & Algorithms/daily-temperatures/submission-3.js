class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // [30,38,30,36,35,40,28]
    // [30]
    38
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const [stackVal, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([temperatures[i], i]);
        }

        return res;
    }
}
