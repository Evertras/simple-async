const request = require('request');

module.exports = {
  getSubreddit: (subreddit, cb) => {
    console.log('Loading subreddit ' + subreddit);
    request(
      'https://www.reddit.com/r/' + subreddit,
      (err, response, body) => cb(err, body)
    );
  }
}
