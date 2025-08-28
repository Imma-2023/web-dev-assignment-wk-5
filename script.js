// Part 1: Variable declarations and conditionals
let username = "Student";
let score = 85;

if (score >= 50) {
  console.log(username + " has passed with a score of " + score);
} else {
  console.log(username + " has failed.");
}

// Part 2: Custom functions
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

function calculateSquare(num) {
  return num * num;
}

greetUser(username);
console.log("The square of 5 is: " + calculateSquare(5));

// Part 3: Loops
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

let j = 0;
while (j < 3) {
  console.log("While loop count: " + j);
  j++;
}

// Part 4: DOM interactions
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("intro").textContent = "The text has been changed!";
});

document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  document.getElementById("itemList").appendChild(newItem);
});

document.getElementById("toggleColorBtn").addEventListener("click", function () {
  document.body.classList.toggle("highlight");
});
