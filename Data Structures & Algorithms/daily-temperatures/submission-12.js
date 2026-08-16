class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = Array(temperatures.length).fill(0);

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
