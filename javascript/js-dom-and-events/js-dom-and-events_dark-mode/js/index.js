console.clear();

const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
darkButton.addEventListener("click", () => {
  document.body.classList.add("dark");
});
lightButton.addEventListener("click", () => {
  document.body.classList.remove("dark");
});
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
