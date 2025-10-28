import { useState, useEffect } from "react";

function AddToTeamButton({ pokemonName, teams, onAddPokemon }) {
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    if (teams.length > 0) setSelectedTeam(teams[0].id);
  }, [teams]);

  if (teams.length === 0) return <p>Maak eerst een team aan om toe te voegen</p>;

  return (
    <div style={{ marginTop: "8px" }}>
      <select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <button
        className="btn small"
        onClick={() => onAddPokemon(selectedTeam, pokemonName)}
      >
        ➕ Voeg toe
      </button>
    </div>
  );
}

export default AddToTeamButton;
