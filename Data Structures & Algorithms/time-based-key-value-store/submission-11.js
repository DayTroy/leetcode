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
        if (this.keyStore.has(key)) {
            const val = this.keyStore.get(key);
            val.push([value, timestamp])
            this.keyStore.set(key, val);
        } else {
            this.keyStore.set(key, [[value, timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];
        let l = 0;
        let r = values.length - 1;
        let value = '';

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (values[m][1] <= timestamp) {
                value = values[m][0];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return value;
    }
}
