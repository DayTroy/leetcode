class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const arr = [];

        while (nums1.length && nums2.length) {
            if (nums1[0] < nums2[0]) {
                arr.push(nums1[0]);
                nums1.shift();
            } else {
                arr.push(nums2[0]);
                nums2.shift();
            }
        }
        
        if (nums1.length > 0) {
            arr.push(...nums1);
        }
        
        if (nums2.length > 0) {
            arr.push(...nums2);
        }

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
