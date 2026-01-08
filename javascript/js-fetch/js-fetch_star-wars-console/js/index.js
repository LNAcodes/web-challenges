console.clear();

const url = "https://swapi.py4e.com/api/people";

async function getStarWars() {
  console.clear();

  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();

  console.log(data);
  console.log(data.count);
  console.log(data.next);
  console.log(data.results);
  console.log(data.results[2].eye_color);
}

getStarWars();
