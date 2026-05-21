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
    if (!data) return "";

    let left = 0;
    let right = data.length - 1;
    let res = "";

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (data[mid][1] <= timestamp) {
            res = data[mid][0]; // Запоминаем возможное значение
            left = mid + 1;     // Ищем более позднее время
        } else {
            right = mid - 1;
        }
    }
    return res;
    }
}
