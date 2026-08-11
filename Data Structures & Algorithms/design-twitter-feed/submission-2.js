class Twitter {
    constructor() {
        this.users = new Map();
        this.timestamp = 0
    }

    _initUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                followees: new Set(),
                tweets: []
            });
        }
        return this.users.get(userId);
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const user = this._initUser(userId);
        user.tweets.push({ id: tweetId, time: this.timestamp++ });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const user = this._initUser(userId);
        const maxHeap = new MaxPriorityQueue((x) => x.time);
        
        const authors = new Set(user.followees);
        authors.add(userId);

        for (const authorId of authors) {
            const author = this.users.get(authorId);
            if (author && author.tweets.length > 0) {
                const tweetsArray = author.tweets;
                const lastIndex = tweetsArray.length - 1;
                maxHeap.enqueue({
                    id: tweetsArray[lastIndex].id,
                    time: tweetsArray[lastIndex].time,
                    tweetsArray: tweetsArray,
                    nextIndex: lastIndex - 1,
                    authorId: authorId
                });
            }
        }

        const result = [];
        while (!maxHeap.isEmpty() && result.length < 10) {
            const element = maxHeap.dequeue();
            result.push(element.id);

            if (element.nextIndex >= 0) {
                const tweetsArray = element.tweetsArray;
                const idx = element.nextIndex;
                maxHeap.enqueue({
                    id: tweetsArray[idx].id,
                    time: tweetsArray[idx].time,
                    tweetsArray: tweetsArray,
                    nextIndex: idx - 1,
                    authorId: element.authorId
                });
            }
        }
        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
        const user = this._initUser(followerId);
        user.followees.add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const user = this._initUser(followerId);
        user.followees.delete(followeeId)
    }
}
