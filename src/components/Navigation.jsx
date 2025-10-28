
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokémon Logo"
          width={100}
          style={{ marginRight: 10 }}
        />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/teams">Teams</Link>
      </div>
    </nav>
  );
}
