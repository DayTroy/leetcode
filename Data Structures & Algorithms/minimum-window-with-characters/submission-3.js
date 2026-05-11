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

        let lowestWindowLen = Infinity;
        let positions = [0, 9];

        for (let i = 0; i < s.length; i++) {
            const freqS = new Map();
            for (let j = i; j < s.length; j++) {
                freqS.set(s[j], (freqS.get(s[j]) || 0) + 1);
                let isValidWindow = true;

                for (let char of freqT.keys()) {
                    if ((freqS.get(char) || 0) < freqT.get(char)) {
                        isValidWindow = false;
                        break;
                    }
                }

                if (isValidWindow && j - i + 1 < lowestWindowLen) {
                    lowestWindowLen = j - i + 1;
                    positions = [i, j];
                }
            }
        }

        return lowestWindowLen === Infinity ? "" : s.slice(positions[0], positions[1] + 1);
    }
}
