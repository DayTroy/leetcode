class Twitter {
    constructor() {
        this.users = new Map();
        this.timestamp = 0;
    }
    
    _initUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                tweets: [],
                followees: new Set()
            })
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
        user.tweets.push({ id: tweetId, timestamp: ++this.timestamp });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const user = this._initUser(userId);
        const allTweets = [];
        allTweets.push(...user.tweets);

        const followees = user.followees || [];

        for (const followee of followees) {
            const followeeInfo = this._initUser(followee);
            allTweets.push(...followeeInfo.tweets);
        }

        return allTweets
            .sort((a, b) => b.timestamp - a.timestamp)
            .map(tweet => tweet.id)
            .slice(0, 10);
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
        user.followees.delete(followeeId);
    }
}
