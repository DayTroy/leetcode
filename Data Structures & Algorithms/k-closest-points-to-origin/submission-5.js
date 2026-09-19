class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxPriorityQueue(x => x.dist);

        for (const point of points) {
            const dist = point[0] ** 2 + point[1] ** 2;
            heap.enqueue({ dist, point });

            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const res = [];
        while (heap.size() > 0) {
            res.push(heap.dequeue().point);
        }

        return res;
    }
}
