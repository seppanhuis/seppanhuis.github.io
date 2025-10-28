import { useState } from "react";

function FavoriteButton({ name, onToggle }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    onToggle(name, newValue);
  };

  return (
    <span
      onClick={handleClick}
      style={{
        cursor: "pointer",
        marginLeft: "8px",
        color: isFavorite ? "gold" : "#ccc",
        fontSize: "20px",
      }}
    >
      ★
    </span>
  );
}

export default FavoriteButton;
