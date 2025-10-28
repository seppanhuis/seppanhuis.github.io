// src/components/FilterBar.jsx
import Search from "./Search";
import TypeFilter from "./TypeFilter";
import FavoriteFilter from "./FavoriteFilter";

export default function FilterBar({
  onSearch,
  onTypeSelect,
  showFavorites,
  onToggleFavorites,
}) {
  return (
    <div
      className="filter-bar"
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      <Search onSearch={onSearch} />
      <TypeFilter onSelect={onTypeSelect} />
      <FavoriteFilter checked={showFavorites} onChange={onToggleFavorites} />
    </div>
  );
}
