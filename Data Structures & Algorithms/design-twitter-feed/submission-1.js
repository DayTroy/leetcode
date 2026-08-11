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
        let allTweets = [...user.tweets];

        for (const followeeId of user.followees) {
            const followee = this.users.get(followeeId);
            if (followee) {
                allTweets.push(...followee.tweets);
            }
        }

        allTweets.sort((a, b) => b.time - a.time);
        
        return allTweets.slice(0, 10).map(tweet => tweet.id);;
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
