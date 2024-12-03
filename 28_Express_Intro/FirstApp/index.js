const express = require('express');
const app = express();

// app.use((req, res) => {
// 	console.log('WE GOT A NEW REQUEST');
// 	// res.send('This is a response');
// 	res.send('<h1>This is my webpage</h1>');
// });

app.get('/', (req, res) => {
	res.send('Welcome to the homepage!!!');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.send(`<h1>Welcome to ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
	const { subreddit, postId } = req.params;
	res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit</h1>`);
});

app.post('/cats', (req, res) => {
	res.send('Not a GET request!');
});

app.get('/cats', (req, res) => {
	res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
	res.send('Woof!');
});

app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) {
		return res.send('Nothing found if nothing searched.');
	}
	res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get('*', (req, res) => {
	res.send("I don't know that route");
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
