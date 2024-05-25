import { createServer } from "http";

const hostname = "localhost";
const port = 3000;

// const b = Buffer.alloc(10000);
// const str = " ";
// b.write(str);
// console.log(str.length);
// console.log(b.length);

const arr = process.argv.slice(2);
console.log(arr);

const server = createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html",
	});
	res.end(`<h1>Hello World</h1>`);
});

server.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}`);
});
