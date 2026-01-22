import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  // Führe diesen Code nach dem Rendern aus und bei async arbeitet der Code noch und wartet auf Antworten
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
      // try/catch fängt den Fehler auf, wenn beim fetchen ein Fehler passiert
      loadPokemon();
    }
  }, []);

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
