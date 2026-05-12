class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const freqT = new Map();

        for (let char of t) {
            freqT.set(char, (freqT.get(char) || 0) + 1);
        }

        let minWindowLen = Infinity;
        let positions = [-1, 62];

        for (let i = 0; i < s.length; i++) {
            const freqS = new Map();
            for (let j = i; j < s.length; j++) {
                const char = s[j];
                freqS.set(char, (freqS.get(char) || 0) + 1);

                let isEnoughLetters = true;

                for (let c of freqT.keys()) {
                    if (freqT.get(c) > (freqS.get(c) || 0)) {
                        isEnoughLetters = false;
                        break;
                    }
                }

                if (isEnoughLetters && j - i + 1 < minWindowLen) {
                    minWindowLen = j - i + 1;
                    positions = [i, j];
                }
            }
        }

        return minWindowLen === Infinity ? '' : s.slice(positions[0], positions[1] + 1);

    }
}
