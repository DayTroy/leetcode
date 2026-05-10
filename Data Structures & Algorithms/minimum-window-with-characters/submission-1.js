class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";
        const freqT = new Map();

        for (let char of t) {
            freqT.set(char, (freqT.get(char) || 0) + 1)
        }

        let positions = [-1, -1];
        let windowLen = Infinity;

        for (let i = 0; i < s.length; i++) {
            const freqS = new Map();

            for (let j = i; j < s.length; j++) {
                freqS.set(s[j], (freqS.get(s[j]) || 0) + 1)

                let isEnoughLetters = true;

                for (const char of freqT.keys()) {
                    if ((freqS.get(char) || 0) < freqT.get(char)) {
                        isEnoughLetters = false;
                        break;
                    }
                }

                if (isEnoughLetters && j - i + 1 < windowLen) {
                    windowLen = j - i + 1;
                    positions = [i, j];
                }
            }
        }

        return windowLen === Infinity ? '' : s.slice(positions[0], positions[1] + 1) 


    }
}
