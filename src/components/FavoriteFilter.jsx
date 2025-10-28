function FavoriteFilter({ checked, onChange }) {
  return (
    <label className="favorite-filter">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="checkmark"></span>
      Alleen favorieten
    </label>
  );
}

export default FavoriteFilter;
