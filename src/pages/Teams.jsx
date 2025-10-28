// Teams.jsx
import TeamForm from "../components/TeamForm";
import TeamCard from "../components/TeamCard";

function Teams({ teams, setTeams }) {
  
  // Team toevoegen
    const addTeam = (name) => {
    const newTeam = {
      id: Date.now(),
      name,
      pokemons: [],
    };
    setTeams([...teams, newTeam]);
  };

    // Team verwijderen
  const deleteTeam = (id) => {
    setTeams(teams.filter((t) => t.id !== id));
  };

    // Pokémon aan team toevoegen
  const addPokemonToTeam = (teamId, pokemon) => {
    setTeams(
      teams.map((team) =>
        team.id === teamId && !team.pokemons.includes(pokemon)
          ? { ...team, pokemons: [...team.pokemons, pokemon] }
          : team
      )
    );
  };

    // Pokémon uit team verwijderen
  const removePokemonFromTeam = (teamId, pokemon) => {
    setTeams(
      teams.map((team) =>
        team.id === teamId
          ? { ...team, pokemons: team.pokemons.filter((p) => p !== pokemon) }
          : team
      )
    );
  };

  return (
    <div className="container">
      <h1>Pokémon Teams</h1>
      <TeamForm onAdd={addTeam} />

      <div className="team-list">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            onDelete={deleteTeam}
            onAddPokemon={addPokemonToTeam}
            onRemovePokemon={removePokemonFromTeam}
          />
        ))}
      </div>
    </div>
  );
}

export default Teams;
