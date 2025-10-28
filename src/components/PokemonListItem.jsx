// src/components/PokemonListItem.jsx
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import AddToTeamButton from "./AddToTeamButton";

const getPokemonId = (url) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

export default function PokemonListItem({
  pokemon,
  teams,
  onToggleFavorite,
  onAddPokemon,
}) {
  const id = getPokemonId(pokemon.url);
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <li>
      <div className="pokemon-link">
        <Link to={`/detail/${pokemon.name}`}>
          <img src={sprite} alt={pokemon.name} />
          <span>{pokemon.name}</span>
        </Link>
      </div>
      <div className="pokemon-actions">
        <FavoriteButton name={pokemon.name} onToggle={onToggleFavorite} />
        <AddToTeamButton
          pokemonName={pokemon.name}
          teams={teams}
          onAddPokemon={onAddPokemon}
        />
      </div>
    </li>
  );
}
