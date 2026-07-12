class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const arr = [];
        let i = 0;
        let j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        }
        
        while (i < nums1.length) arr.push(nums1[i++]);
        while (j < nums2.length) arr.push(nums2[j++]);

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
