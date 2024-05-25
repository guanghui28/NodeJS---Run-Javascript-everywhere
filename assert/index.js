// import assert from "assert";
import { strict as assert } from "assert";

console.clear();
// Ex1:
/*
let x = 4;
let y = 5;
try {
	assert(x === y);
} catch {
	console.log(`${x} is not equal ${y}`);
}

*/
// let x = 4;
// let y = 5;
// assert(y < x);

// const

// try {
// 	assert(0, "Quang Huy 0");
// } catch (error) {
// 	console.log("Error: ", error.message);
// }

// try {
// 	// assert.deepStrictEqual({ a: 1 }, { a: '1'}, "Value type must be Number");
// 	assert.deepStrictEqual({ a: 1 }, { a: 1 }, "Value type must be Number");
// 	console.log("No error");
// } catch (error) {
// 	console.log("Error: ", error.message);
// }

// try {
// 	assert.doesNotThrow(
// 		() => {
// 			throw new TypeError("Wrong value");
// 		},
// 		/abcd/,
// 		"Quang Huy"
// 	);
// } catch (error) {
// 	console.log("Error: ", error.message);
// }

// try {
// 	assert.equal(5, "5", "Not equal");
// 	console.log("Equal");
// } catch (error) {
// 	console.log("Error: ", error.message);
// }

// try {
// 	assert.fail(new Error("My fault"));
// 	// console.log("No fail");
// } catch (error) {
// 	console.log("Error: ", error.message);
// }
try {
	assert.ifError("asdasd");
} catch (error) {
	console.log("Error: ", error.message);
}
