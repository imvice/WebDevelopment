const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON in POST request body:
app.use(express.json());
// To 'fake' put/patch/delete requests:

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
	{
		id: uuid(),
		username: 'Todd',
		comment: 'lol that is so funny!',
	},
	{
		id: uuid(),
		username: 'Skyler',
		comment: 'I like that',
	},
	{
		id: uuid(),
		username: 'Sk8erBoi',
		comment: 'Plz delete your account, Todd',
	},
	{
		id: uuid(),
		username: 'onlysayswoof',
		comment: 'woof woof woof',
	},
];

// GET /comments - List all comments
app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
});

// GET /comments/new - serves a form to create a new comment
app.get('/comments/new', (req, res) => {
	res.render('comments/new');
});

// POST /comments - Creates a new comment, form submits here from GET
app.post('/comments', (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment, id: uuid() });
	res.redirect('/comments');
});

// GET /comments/:id - Get a specific comment (using ID)
app.get('/comments/:id', (req, res) => {
	const { id } = req.params;
	const comment = comments.find(c => c.id === id);
	res.render('comments/show', { comment });
});

// PATCH /comments/:id Update a comment
app.patch('/comments/:id', (req, res) => {
	const { id } = req.params;
	const foundComment = comments.find(c => c.id === id);

	//get new text from req.body
	const newCommentText = req.body.comment;
	//update the comment with the data from req.body:
	foundComment.comment = newCommentText;
	//redirect back to index (or wherever you want)
	res.redirect('/comments');
	console.log('req body:', req.body);
	
});

app.get('/tacos', (req, res) => {
	res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
	const { meat, qty } = req.body;
	res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
	console.log('on port 3000');
});

// DELETE /comments/:id Destroy a comment
