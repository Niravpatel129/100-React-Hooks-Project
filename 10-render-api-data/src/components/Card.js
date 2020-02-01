import React from "react";

import { connect } from "react-redux";

function Card() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { Teams: state.teamsReducer };
};

export default connect(mapStateToProps)(Card);
