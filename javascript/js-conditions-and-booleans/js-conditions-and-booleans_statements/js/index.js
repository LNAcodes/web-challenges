console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "hansihansen";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Rufus_the_Cat");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 1199;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 2;
if (numberOfHotdogs < 5) {
  console.log("2 Euro");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 Euro");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 Euro");
} else if (numberOfHotdogs >= 1000000) {
  console.log("0.10 Euro");
}

// Part 4: Daytime
const currentHour = 5;

/*let statement = "Still need to learn...";

if (currentHour < 17) {
  console.log("Still need to learn...");
} else {
  statement = "Partytime!!!";
}
*/

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
console.log(statement);

// Part 5: Greeting
const userName = "Hendrik";
const coachName = "Hendrik";

const greeting =
  userName === coachName ? "Hello Coach " + userName + "!" : "Hello Stranger";
console.log(greeting);
