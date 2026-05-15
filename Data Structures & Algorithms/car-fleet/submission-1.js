class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    // target = 10, position = [4,1,0,7], speed = [2,2,1,1]
    // 3, 4.5, 10, 3
    // 10, 4.5, 3, 3
    carFleet(target, position, speed) {
        const cars = position.map((position, index) => [position, speed[index]]);
        const stack = [];

        cars.sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < cars.length; i++) {
            const t = (target - cars[i][0]) / (cars[i][1]);
            stack.push(t);

            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
