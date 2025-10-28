// src/pages/Detail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import PokemonExtra from "../components/PokemonExtra";

function Detail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Bezig met laden...</p>;

  return (
    <div className="container detail-layout">
      <PokemonCard pokemon={pokemon} />
      <PokemonExtra pokemon={pokemon} />
    </div>
  );
}

export default Detail;
