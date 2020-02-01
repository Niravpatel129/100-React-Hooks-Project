import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TeamsActions } from "../redux/actions";

import Card from "./Card";

import "./TeamList.css";

function TeamList({ Teams, getData }) {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="TeamList">
      {Teams.map((i, index) => (
        <Card key={index} index={index} title={i.title} src={i.url} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return { Teams: state.teamsReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(TeamsActions.getData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
