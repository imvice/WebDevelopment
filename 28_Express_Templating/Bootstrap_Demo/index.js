const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
	res.render('home', { title: 'Home' });
});

app.get('/cats', (req, res) => {
	const cats = ['Tom', 'Lily', 'Gibson', 'Winston'];
	res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	if (data) {
		res.render('subreddit', { ...data, title: data.name });
	} else {
		res.render('notfound', { title: subreddit });
	}
});

app.get('/rand', (req, res) => {
	const randNum = Math.floor(Math.random() * 10) + 1;
	res.render('random', { randNum, title: 'Random' });
});

app.listen(3000, () => {
	console.log('listening on port 3000...');
});
