function Greeting({ name }) {
  const coaches = ["Roland", "Felix", "Klaus"];
  console.log("Name:", name);
  console.log("Ist Coach?", coaches.includes(name));
  return <h1>Hi {coaches.includes(name) ? "Coach" : `${name}!`}</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Roland" />
      <Greeting name="Felix" />
      <Greeting name="Klaus" />
      <Greeting name="Hektor" />
      <Greeting name="Elena" />
      <Greeting name="Luisa" />
    </div>
  );
}
