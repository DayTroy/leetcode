class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MinPriorityQueue(item => item.dist);

        for (const point of points) {
            const dist = point[0] ** 2 + point[1] ** 2;

            heap.enqueue({ point, dist  });
        }

        const res = [];
        while (k != 0) {
            res.push(heap.dequeue().point)
            k--;
        }

        return res;
    }

}
