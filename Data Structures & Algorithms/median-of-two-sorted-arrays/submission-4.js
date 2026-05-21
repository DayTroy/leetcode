class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const nums3 = [...nums1, ...nums2];
        nums3.sort((a, b) => a - b);

        const m = Math.floor((0 + nums3.length - 1) / 2);

        if (nums3.length % 2 == 0) {
            return (nums3[m] + nums3[m + 1]) / 2;
        } else {
            return nums3[m];
        }
    }
}
