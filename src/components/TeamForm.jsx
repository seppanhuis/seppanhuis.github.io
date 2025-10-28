import { useState } from "react";

function TeamForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name.trim());
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="team-form">
      <input
        type="text"
        placeholder="Team naam..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn">
        Team toevoegen
      </button>
    </form>
  );
}

export default TeamForm;
