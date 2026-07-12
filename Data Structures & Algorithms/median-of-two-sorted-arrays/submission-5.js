class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const arr = [...nums1, ...nums2].sort((a, b) => a - b)
        const m = Math.floor(arr.length / 2);
        let ans = 0;

        if (arr.length % 2 === 0) {
            ans = (arr[m - 1] + arr[m]) / 2;
        } else {
            ans = arr[m];
        }
        return ans;
    }
}
