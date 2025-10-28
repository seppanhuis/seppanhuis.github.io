// src/components/PokemonExtra.jsx

function PokemonExtra({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-extra">
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>

      <h2>Base Stats</h2>
      <ul className="stats-list">
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            <span className="stat-name">{s.stat.name}</span>
            <div className="stat-bar">
              <div
                className="stat-fill"
                style={{ width: `${s.base_stat}%` }}
              >
                {s.base_stat}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonExtra;
