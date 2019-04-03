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

if(hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1 === hacker2) {
  console.log("What?! You both got the same name?");
}

// Palindrome

var sentence = prompt("Tell me something!");
var reverseSentence = "";
for(var i = sentence.length - 1; i >= 0; i--){
  reverseSentence += sentence[i];
}
if(sentence === reverseSentence) {
  console.log("You've written a palindrome!");
} else {
  console.log("Cool! Thanks!");
}

// Ipsum 

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis imperdiet mattis. Aenean sollicitudin sit amet est quis maximus. Cras efficitur, justo eu sagittis sodales, lectus mi mattis lectus, sed laoreet nunc nunc sit amet leo. Ut fringilla lectus massa, eget luctus erat rhoncus vel. Cras iaculis bibendum diam. Phasellus quis faucibus turpis. Etiam massa leo, aliquam id tellus eu, laoreet rhoncus neque. Donec pretium sodales mollis. Proin ut dolor libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex enim, varius ac cursus et, hendrerit vitae purus. Vestibulum ornare augue vitae tortor suscipit, sed elementum ipsum iaculis. In molestie justo nibh, ac efficitur magna sodales quis. Curabitur nec odio sit amet neque fringilla pulvinar. Ut nec maximus risus. Cras non lacus dictum dolor iaculis vehicula. Aliquam at tincidunt ante. Quisque eleifend fringilla vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In varius tincidunt erat sed tempus. Vestibulum porttitor nibh quis finibus semper. Praesent quis tellus vestibulum, commodo est quis, fringilla velit."

var ipsumWords = lorem.split(" ")

var etWords = 0;
for(var i = 0; i < ipsumWords.length; i++){
  if (ipsumWords[i].includes('et')){
    etWords++;
  }
}
console.log("There are " + ipsumWords.length + " words in these paragraphs. " + etWords + " of these words contain 'et.'");
