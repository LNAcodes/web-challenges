console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const language of programmingLanguages) {
  console.log(language);

  const li = document.createElement("li"); // I make an empty box (list) and it is empty, but will get a text/content in the next step
  li.textContent = language; // Hey li, your text should be 'x-language' = writing something on my box/list
  ol.append(li); // put the box into a shelf
}
// --^-- write or modify code above this line --^--
