class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    // target = 10, position = [4,1,0,7], speed = [2,2,1,1]

    // [4,2] [1,2] [0,1] [7,1]

    // [7,1] [4,2] [1,2] [0,1]
    // 3.     3.    4.5.  10
    carFleet(target, position, speed) {
        const cars = position
            .map((pos, index) => [pos, speed[index]])
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
