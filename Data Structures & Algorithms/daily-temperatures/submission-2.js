class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // [30,38,30,36,35,40,28]
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
                const [, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([temperatures[i], i]);
        }

        return res;
    }
}
