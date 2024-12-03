const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		const rand = Math.random();
		setTimeout(() => {
			if (rand < 0.5) {
				resolve(`Here is your fake data from ${url}`);
			} else {
				reject("Request Error!");
			}
		}, 1000);
	});
};

// fakeRequest("/dogs/1")
// 	.then((data) => {
// 		console.log("DONE WITH REQUEST!");
// 		console.log("Data is:", data);
// 	})
// 	.catch((err) => {
// 		console.log("OH NO!", err);
// 	});

async function makeTwoRequests() {
	try {
		let data1 = await fakeRequest("/page1");
		console.log(data1);
		let data2 = await fakeRequest("/page2");
		console.log(data2);
	} catch (e) {
		console.log("CAUGHT AN ERROR");
		console.log("ERROR:", e);
	}
}

const delayedColorChange = (color, delay) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};

// delayedColorChange("red", 1000)
// 	.then(() => delayedColorChange("red", 1000))
// 	.then(() => delayedColorChange("orange", 1000))
// 	.then(() => delayedColorChange("yellow", 1000))
// 	.then(() => delayedColorChange("green", 1000))
// 	.then(() => delayedColorChange("blue", 1000))
// 	.then(() => delayedColorChange("indigo", 1000))
// 	.then(() => delayedColorChange("violet", 1000));

async function rainbow() {
	await delayedColorChange("red", 1000);
	await delayedColorChange("orange", 1000);
	await delayedColorChange("yellow", 1000);
	await delayedColorChange("green", 1000);
	await delayedColorChange("blue", 1000);
	await delayedColorChange("indigo", 1000);
	await delayedColorChange("violet", 1000);
}
