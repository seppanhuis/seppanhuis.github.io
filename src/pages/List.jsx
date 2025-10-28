import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import PokemonList from "../components/PokemonList";
import CustomAlert from "../components/CustomAlert";

function List({ teams, setTeams }) {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [type, setType] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [typeFiltered, setTypeFiltered] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Data ophalen
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  // Filteren op naam
  const filteredPokemons = useMemo(
    () => pokemons.filter((p) => p.name.includes(filter.toLowerCase())),
    [pokemons, filter]
  );

  // Filteren op type
  useEffect(() => {
    if (!type) {
      setTypeFiltered(filteredPokemons);
      return;
    }
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.json())
      .then((data) => {
        const typeNames = data.pokemon.map((p) => p.pokemon.name);
        setTypeFiltered(
          filteredPokemons.filter((p) => typeNames.includes(p.name))
        );
      });
  }, [type, filteredPokemons]);

  // Eindfilter (favorieten)
  const finalList = showFavorites
    ? typeFiltered.filter((p) => favorites.includes(p.name))
    : typeFiltered;

  // Favorieten toggle
  const handleToggleFavorite = (name, isFav) => {
    setFavorites((prev) =>
      isFav ? [...prev, name] : prev.filter((f) => f !== name)
    );
  };

  // Pokémon naar team toevoegen
  const handleAddPokemonToTeam = (teamId, pokemonName) => {
    const updatedTeams = teams.map((team) =>
      team.id === parseInt(teamId) && !team.pokemons.includes(pokemonName)
        ? { ...team, pokemons: [...team.pokemons, pokemonName] }
        : team
    );
    setTeams(updatedTeams);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container">
      <h1>Pokémon Lijst</h1>
      {showAlert && (
        <CustomAlert
          message="Pokemon succesvol toegevoegd!"
        />
      )}
      <FilterBar
        onSearch={setFilter}
        onTypeSelect={setType}
        showFavorites={showFavorites}
        onToggleFavorites={setShowFavorites}
      />
      <PokemonList
        pokemons={finalList}
        teams={teams}
        onToggleFavorite={handleToggleFavorite}
        onAddPokemon={handleAddPokemonToTeam}
      />
    </div>
  );
}

export default List;
