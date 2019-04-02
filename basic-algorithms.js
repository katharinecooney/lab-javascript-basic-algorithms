///////////////////////// Names and Input

var hacker1 = "Sam";

console.log("The driver's name is " + driver);

var hacker2 = prompt("What's your name?");

console.log("The navigator's name is " + hacker2);

///////////////////////// Conditionals

if(hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters"); 
} else if (hacker1.length < hacker2.length) {
  console.log("You, navigator has the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!!");
}

///////////////////////// Loops

// Capitalize and space driver's name

var spacedName = ""
for(var i = 0; i < hacker1.length; i++) {
  hacker1 = hacker1.toUpperCase();
  spacedName += hacker1[i] + " ";
}

// Reverse navigator's name

var reverseName = "";
for(var i = hacker2.length - 1; i >= 0; i--){
  reverseName += hacker2[i];
}
console.log(reverseName);

// Lexographical order 

// (I don't know if I understand the directions! I will compare the first letter of each name...)

// I know if the first letters are the same, I should compare the next letters, but I can't think of how to do that...

if(hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1[0] === hacker2[0]) {
  console.log("What?! You both got the same name?");
}

