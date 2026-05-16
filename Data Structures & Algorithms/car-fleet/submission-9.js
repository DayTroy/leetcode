class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    // target=10
    // position=[0,4,2]
    // speed=[2,1,3]

    // [0, 2], [4, 1], [2, 3]

    // [0, 2], [2, 3], [4, 1]

    // 1:
    // (10 - 4) / 1 = 6
    // [6]

    // 2:
    // (10 - 2) / 3 = 2.7
    // [2.7]

    // 3
    // (10 - 0) / 2 = 4
    // 

    carFleet(target, position, speed) {
        const cars = position
            .map((pos, i) => [pos, speed[i]])
            .sort((a, b) => a[0] - b[0]);
        
        const stack = [];

        for (let i = cars.length - 1; i >= 0; i--) {
        const time = (target - cars[i][0]) / cars[i][1];

        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }

    return stack.length;
    }
}
