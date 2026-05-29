class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    // target = 10, position = [4,1,0,7], speed = [2,2,1,1]

    // [4, 2] [1, 2] [0, 1] [7, 1]

    // 10.    4.5.   3.     3. 
    // [0, 1] [1, 2] [4, 2] [7, 1]

    carFleet(target, position, speed) {
        const cars = position
            .map((pos, index) => [pos, speed[index]])
            .sort((a, b) => b[0] - a[0]);


        const stack = [];

        for (let car of cars) {
            const time = (target - car[0]) / car[1];

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
