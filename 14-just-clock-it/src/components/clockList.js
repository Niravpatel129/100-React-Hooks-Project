import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Addtime from "./Addtime";

const SORT_OPTIONS = {
  TIME_ASC: { column: "time", direction: "asc" },
  TIME_DESC: { column: "time", direction: "desc" },
  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" }
};

function ClockList() {
  const [times, setTimes] = useState([]);
  const [sortBy, setSortBy] = useState("TIME_ASC");

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("times")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(ss => {
        let newTimes = ss.docs.map(data => {
          return { id: data.id, ...data.data() };
        });
        setTimes(newTimes);
      });

    return () => {
      if (unsub?.unsubscribe) unsub.unsubscribe();
    };
  }, [sortBy]);

  const handleOptionChange = e => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <Addtime />
      <h3>Times List</h3>
      <div className="Select">
        Sort By:
        <select onChange={handleOptionChange}>
          <option value="TIME_ASC">Slowest</option>
          <option value="TIME_DESC">Fastest</option>
          <option disabled>---</option>
          <option value="TITLE_ASC">A-Z</option>
          <option value="TITLE_DESC">Z-A</option>
        </select>
      </div>
      <div className="TimeEntry">
        {times.map((data, i) => {
          return (
            <code key={i} style={{ display: "block" }}>
              {data.title} - {data.time}seconds
            </code>
          );
        })}
      </div>
    </div>
  );
}

export default ClockList;
