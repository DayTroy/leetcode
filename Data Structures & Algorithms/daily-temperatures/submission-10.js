class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const [, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([temperatures[i], i]);
        }

        return res;
    }
}
