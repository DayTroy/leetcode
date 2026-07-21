class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const temperature = temperatures[i];
            
            while (stack.length > 0 && stack[stack.length - 1][0] < temperature) {
                const [, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }

            stack.push([temperature, i]);
        }

        return res;
    }
}
