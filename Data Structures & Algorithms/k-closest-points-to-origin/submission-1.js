class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxQueue = new MaxPriorityQueue((item) => item.dist);

        for (const point of points) {
            const distance = point[0] * point[0] + point[1] * point[1];
            maxQueue.enqueue({ point, dist: distance });

            if (maxQueue.size() > k) {
                maxQueue.dequeue();
            }
        }

        const res = [];
        while (!maxQueue.isEmpty()) {
            res.push(maxQueue.dequeue().point);
        }
        return res;
    }

}
