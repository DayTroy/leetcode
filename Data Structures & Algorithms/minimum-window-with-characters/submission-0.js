class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        const countT = new Map(); 
        let res = [-1, -1];
        let resLen = Infinity;

        for (let char of t) {
            countT.set(char, (countT.get(char) || 0) + 1);
        }

        for (let i = 0; i < s.length; i++) {
            const countS = new Map();

            for (let j = i; j < s.length; j++) {
                countS.set(s[j], (countS.get(s[j]) || 0) + 1);
                let flag = true;

                for (const [c, val] of countT) {
                    if ((countS.get(c) || 0) < countT.get(c)) {
                        flag = false;
                        break;
                    }
                }

                if (flag && j - i + 1 < resLen) {
                    resLen = j - i + 1;
                    res = [i, j];
                }
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
