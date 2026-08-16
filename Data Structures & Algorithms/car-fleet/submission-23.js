class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const cars = position
            .map((pos, i) => [pos, speed[i]])
            .sort((a, b) => b[0] - a[0]);
        
        for (let i = 0; i < cars.length; i++) {
            const time = (target - cars[i][0]) / cars[i][1];

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
