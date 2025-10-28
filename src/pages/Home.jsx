export default function Home() {
  return (
    <div className="container home">
      <div className="home-banner">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokémon Team Manager"
        />
      </div>
      <h1>Pokémon Team Manager</h1>
      <p>
        Welkom Trainer! 👋 <br />
        Met deze app kun je een lijst van Pokémon bekijken, details
        ontdekken en jouw ideale team samenstellen.
      </p>
      <div className="home-actions">
        <a className="btn" href="/list">Bekijk Pokémon</a>
      </div>
    </div>
  );
}
