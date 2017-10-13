const express = require('express');
const getter = require('./getter');

const app = express();

app.get('/:subreddit', (req, res) => {
  getter.getSubreddit(
    req.params.subreddit,
    (err, body) => {
      if (err) {
        res.status(500).end();
      } else {
        res.send(body);
      }
    }
  );
});

app.listen(8080, () => console.log('Listening on 8080...'));
