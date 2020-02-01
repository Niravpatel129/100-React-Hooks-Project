import React from "react";

function Card({ index, src, title }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={
          src ||
          "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card {index}</h5>
        <p className="card-text">
          {title ||
            "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </p>
      </div>
    </div>
  );
}

export default Card;
