// Basic
// ex 1 | Temperature v1.0

let temp = Math.floor(Math.random() * 11);
console.log(temp);
if (temp < -10) {
    console.log("Very Cold");
} else if (temp < 10) {
    console.log("Cold");
} else if (temp < 20) {
    console.log("ok");
} else {
    console.log("Hot");
}