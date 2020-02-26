import React from "react";

function Star({
  index,
  handlMouseOver,
  hoveredRating,
  handleMouseLeave,
  setMouseRating
}) {
  const isSelected = hoveredRating >= index;
  return (
    <span
      onMouseDown={() => setMouseRating(index)}
      onMouseOver={() => handlMouseOver(index)}
      onMouseLeave={handleMouseLeave}
      style={{ color: isSelected && "gold" }}
      className="fa fa-lg fa-star checked"
    ></span>
  );
}

export default Star;
