class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pointsWithDist = points
        .map(point => [ 
            point, 
            Math.sqrt(Math.pow(point[0] - 0, 2) + Math.pow(point[1] - 0, 2))
        ])

        pointsWithDist.sort((a, b) => b[1] - a[1]);

        return pointsWithDist.slice(points.length - k).map(p => p[0]);
    }
}
