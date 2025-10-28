function TeamCard({ team, onDelete, onRemovePokemon }) {
  // Haal sprite URL op basis van Pokémon naam
  const getSpriteUrl = (name) =>
    `https://img.pokemondb.net/sprites/home/normal/${name}.png`;

  return (
    <div className="team-card">
      <h2>{team.name}</h2>
      <button className="btn" onClick={() => onDelete(team.id)}>
        ❌ Verwijder team
      </button>

      <h3>Pokémon</h3>
      {team.pokemons.length === 0 ? (
        <p>Geen Pokémon toegevoegd</p>
      ) : (
        <ul className="pokemon-list small">
          {team.pokemons.map((p) => (
            <li key={p}>
              <img src={getSpriteUrl(p)} alt={p} width={40} />
              <span>{p}</span>
              <button
                className="btn small"
                onClick={() => onRemovePokemon(team.id, p)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeamCard;
