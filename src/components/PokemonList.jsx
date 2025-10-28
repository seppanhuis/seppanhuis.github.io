// src/components/PokemonList.jsx
import PokemonListItem from "./PokemonListItem";

export default function PokemonList({
  pokemons,
  teams,
  onToggleFavorite,
  onAddPokemon,
}) {
  return (
    <ul className="pokemon-list">
      {pokemons.map((p) => (
        <PokemonListItem
          key={p.name}
          pokemon={p}
          teams={teams}
          onToggleFavorite={onToggleFavorite}
          onAddPokemon={onAddPokemon}
        />
      ))}
    </ul>
  );
}
