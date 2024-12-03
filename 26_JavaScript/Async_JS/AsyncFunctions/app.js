// const sing = async () => {
// 	throw "OH NO, PROBLEM";
// 	return "LA LA LA LA";
// };

// sing()
// 	.then((data) => {
// 		console.log("PROMISE RESOLVED WITH:", data);
// 	})
// 	.catch((err) => {
// 		console.log("OH NO, PROMISE REJECTED");
// 		console.log(err);
// 	});

const login = async (username, password) => {
	if (!username || !password) throw "Missing Credentials";
	if (password === "yes") return "WELCOME";
	throw "Invalid Password";
};

login("user", "yes")
	.then((msg) => {
		console.log("LOGGED IN!");
		console.log(msg);
	})
	.catch((err) => {
		console.log("ERROR!");
		console.log(err);
	});
 