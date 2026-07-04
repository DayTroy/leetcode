class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
            .map((pos, ind) => [pos, speed[ind]])
            .sort((a, b) => b[0] - a[0]);

        const stack = [];

        for (let i = 0; i < cars.length; i++) {
            const time = (target - cars[i][0]) / cars[i][1];

            if (stack.length === 0 || stack[stack.length - 1] < time) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
