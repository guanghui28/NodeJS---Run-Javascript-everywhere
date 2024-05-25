import dns from "dns";

// console.log(dns.getServers());

// const res = dns.getServers();

// res.forEach((el) => {
// 	console.log(el);
// });
// dns.lookup("....mobi", { family: 6 }, (err, address, family) => [
// 	console.log(address),
// 	// console.log(`address ${address} IPv${family}`),
// ]);

// dns.lookup("facebook.com", { all: true, family: 0 }, (err, address) => {
// 	console.log(address);
// });

// dns.lookupService("127.0.0.1", 3000, (err, hostname, service) => {
// 	console.log(hostname, service);
// });

const options = {
	family: 6,
	hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup("www.geeksforgeeks.org", options, (err, address) => {
	console.log(address);
	if (err) {
		console.log(err.stack);
	} else {
		dns.lookupService(address, 80, (err, hostname, service) => {
			if (err) {
				console.log(err.stack);
			}
			console.log(hostname, service);
		});
	}
});
