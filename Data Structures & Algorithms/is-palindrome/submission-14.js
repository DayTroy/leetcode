class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            const charLeft = s[l].toLowerCase();
            const charRight = s[r].toLowerCase();
            if (!this.isAlphaNumeric(charLeft)) {
                l++;
                continue;
            }
            if (!this.isAlphaNumeric(charRight)) {
                r--;
                continue;
            }
            if (charLeft !== charRight) return false;
            l++;
            r--;
        }

        return true;
    }

    isAlphaNumeric(char) {
        return ((char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9'));
    }
}
