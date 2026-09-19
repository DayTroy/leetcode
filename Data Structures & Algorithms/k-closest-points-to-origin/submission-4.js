class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MinPriorityQueue(x => x.dist);

        for (const point of points) {
            const dist = point[0] ** 2 + point[1] ** 2;
            heap.enqueue({ dist, point });
        }

        const res = [];
        while (k !== 0 && heap.size() > 0) {
            res.push(heap.dequeue().point);
            k--;
        }

        return res;
    }

}
