class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        const val = this.keyStore.get(key);
        val.push([value, timestamp]);

        this.keyStore.set(key, val);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.keyStore.get(key) || [];
        let l = 0;
        let r = values.length - 1;
        let res = '';

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (values[m][1] <= timestamp) {
                res = values[m][0];
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}
