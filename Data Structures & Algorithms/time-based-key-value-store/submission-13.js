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
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const data = this.keyStore.get(key);
        let l = 0;
        let r = data.length - 1
        let val = '';

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (data[m][1] <= timestamp) {
                val = data[m][0];
                l = m + 1;
            } else  {
                r = m - 1;
            }
        }

        return val;
    }
}
