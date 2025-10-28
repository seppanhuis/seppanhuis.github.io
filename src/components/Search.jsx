import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Zoek Pokémon..."
      value={query}
      onChange={handleChange}
      className="search-input"
    />
  );
}

export default Search;
