class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const res = [];

        for (let i = 0; i < nums1.length; i++) {
            let j = nums2.indexOf(nums1[i])
            const item = nums2[j];
            let found = false;

            for (let k = j + 1; k < nums2.length; k++) {
                if (nums2[k] > item) {
                    res.push(nums2[k]);
                    found = true;
                    break;
                }
            }

            if (!found) {
                res.push(-1)
            }
        }

        return res;
    }
}
