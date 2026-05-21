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
            const arr = this.keyStore.get(key);
            arr.push([value, timestamp]);
            this.keyStore.set(key, arr);
        } else {
            this.keyStore.set(key, [ [value, timestamp] ]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const data = this.keyStore.get(key);
        if (!data) return ""; // Возвращаем пустую строку, если ключа нет
        const filtered = data.filter(item => item[1] <= timestamp);
        return filtered.length > 0 ? filtered[filtered.length - 1][0] : "";
    }
}
