class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const check = new Map();

        for (let num of nums) { 
            if (check.has(num)) return num;
            check.set(num, check.get(num) || 0);
        }
        
        // let l = 0;
        // let r = l + 1;
        // while (l < nums) {
            
        // }
    }
}
