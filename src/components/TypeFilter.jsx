import { useState, useEffect } from "react";

function TypeFilter({ onSelect }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => setTypes(data.results));
  }, []);

  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <select onChange={handleChange} className="type-filter">
      <option value="">Alle types</option>
      {types.map((t) => (
        <option key={t.name} value={t.name}>
          {t.name}
        </option>
      ))}
    </select>
  );
}

export default TypeFilter;
