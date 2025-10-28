
function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-card">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p><strong>Hoogte:</strong> {pokemon.height}</p>
      <p><strong>Gewicht:</strong> {pokemon.weight}</p>
      <p>
        <strong>Type(s):</strong>{" "}
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className={`type-label type-${t.type.name}`}
          >
            {t.type.name}
          </span>
        ))}
      </p>
    </div>
  );
}

export default PokemonCard;
