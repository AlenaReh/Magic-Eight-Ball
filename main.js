let userName = "Alena";
let userQuestion = "Will it ever stop snowing?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = [
  "It is certain",
  "It is decidedly so",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes",
];

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
console.log(`${userName} is asking, "${userQuestion}"`);
if (randomNumber === 0) {
    console.log(`Your answer is: "${eightBall[0]}"`)
}
if (randomNumber === 1) {
    console.log(`Your answer is: "${eightBall[1]}"`)
}
if (randomNumber === 2) {
    console.log(`Your answer is: "${eightBall[2]}"`)
}
if (randomNumber === 3) {
    console.log(`Your answer is: "${eightBall[3]}"`)
}
if (randomNumber === 4) {
    console.log(`Your answer is: "${eightBall[4]}"`)
}
if (randomNumber === 5) {
    console.log(`Your answer is: "${eightBall[5]}"`)
}
if (randomNumber === 6) {
    console.log(`Your answer is: "${eightBall[6]}"`)
}
if (randomNumber === 7) {
    console.log(`Your answer is: "${eightBall[7]}"`)
}
if (randomNumber === 8) {
    console.log(`Your answer is: "${eightBall[8]}"`)
}