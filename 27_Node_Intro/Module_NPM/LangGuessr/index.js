const langs = require('langs');
const franc = require('franc');
const colors = require('colors');

const input = process.argv[2];
const languageCode = franc(input);
if (languageCode === 'und') {
	console.log("Sorry, couldn't figure it out! Try with more sample text!".red);
} else {
	const language = langs.where('3', languageCode);
	if (language) {
		console.log(`This is: ${language.name}`.green);
	} else {
		console.log(`Sorry, couldn't find a language for code: ${languageCode}`.red);
	}
}
