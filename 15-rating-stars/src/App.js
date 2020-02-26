import React, { useState } from "react";
import "./App.css";
import Star from "./components/Star";

function App() {
  const [stars] = useState([1, 2, 3, 4, 5]);
  const [hoveredRating, setHoveredRating] = useState(-1);
  const [rating, setRating] = useState(-1);

  const handlMouseOver = index => {
    setHoveredRating(index);
  };

  const handleMouseLeave = index => {
    setHoveredRating(rating);
  };

  const setMouseRating = index => {
    setRating(index);
  };

  return (
    <div className="App">
      <h1>Add a Rating</h1>
      <div className="stars">
        {stars.map((item, index) => {
          return (
            <Star
              key={index}
              hoveredRating={hoveredRating}
              index={index}
              handlMouseOver={handlMouseOver}
              handleMouseLeave={handleMouseLeave}
              setMouseRating={setMouseRating}
            />
          );
        })}
        <p>Rating: {rating + 1}</p>
      </div>
    </div>
  );
}

export default App;
