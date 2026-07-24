class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let foundA = false;
        let foundB = false;
        let foundC = false;

        for (let triplet of triplets) {
            if (triplet[0] <= target[0] && triplet[1] <= target[1] && triplet[2] <= target[2]) {
                if (triplet[0] === target[0]) foundA = true;
                if (triplet[1] === target[1]) foundB = true;
                if (triplet[2] === target[2]) foundC = true;
            }
        }

        return foundA && foundB && foundC;
    }
}
