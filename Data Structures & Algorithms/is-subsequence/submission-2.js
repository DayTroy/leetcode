class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let l = 0;
        let target = '';

        for (let r = 0; r < t.length; r++) {
            if (t[r] === s[l]) {
                target += t[r];
                l++;
            } 
        }
    
        return target === s;
    }
}
