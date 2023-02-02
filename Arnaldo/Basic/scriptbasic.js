// Basic
// ex 1 | Temperature v1.0

let temp = Math.floor(Math.random() * 31 - 5);
console.log(temp);
if (temp < 11) {
    console.log("The weather is cold");
} else {
    console.log("The weather is moderate");
}

// ex 2 | Random Food
let random = Math.floor(Math.random() * 4);
let food = ["pizza", "hamburger", "ice cream", "chocolate"];
console.log("The Meal of the Day is " + food[random]);

// ex 3 | Crystal Gazer

function crystalGlazer(job, Location, partners_Name, Children) {
    let infos = `You will be a ${job}, in ${Location}, and married to ${partners_Name}, with ${Children}.`;
    console.log(infos)
}
crystalGlazer("dentist", "Italy", "Julia", 4);
crystalGlazer("doctor", "Malta", "Joanna", 2)