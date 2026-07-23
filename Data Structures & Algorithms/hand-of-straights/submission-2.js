class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;
        
        const count = new Map();
        for (let num of hand) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        
        const keys = Array.from(count.keys()).sort((a, b) => a - b);
        
        for (let num of keys) {
            let cnt = count.get(num);
            if (cnt > 0) {
                for (let i = 0; i < groupSize; i++) {
                    let current = num + i;
                    let currentCount = count.get(current) || 0;
                    if (currentCount < cnt) return false;
                    count.set(current, currentCount - cnt);
                }
            }
        }
        
        return true;
    }
}
