class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */    
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const frequency = new Map();
        for (const item of hand) {
            frequency.set(item, (frequency.get(item) || 0) + 1);
        }

        const sortedKeys = Array.from(frequency.keys()).sort((a, b) => a - b);

        for (const card of sortedKeys) {
            const currentCount = frequency.get(card);
            
            if (currentCount > 0) {
                const needed = currentCount;
                
                for (let i = card; i < card + groupSize; i++) {
                    const countOfI = frequency.get(i) || 0;
                    
                    if (countOfI < needed) return false;
                    
                    frequency.set(i, countOfI - needed);
                }
            }
        }

        return true;
    }
}
