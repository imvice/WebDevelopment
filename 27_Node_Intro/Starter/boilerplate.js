const fs = require('fs');
const dirName = process.argv[2] || 'Project';

// fs.mkdir('Pets', { recursive: true }, (err) => {
// 	console.log('inside callback');
// 	if (err) throw err;
// });
// console.log('After mkdir');

try {
	fs.mkdirSync(dirName);
	fs.writeFileSync(`${dirName}/index.html`, '');
	fs.writeFileSync(`${dirName}/app.js`, '');
	fs.writeFileSync(`${dirName}/styles.css`, '');
} catch (err) {
	console.log(e);
}
