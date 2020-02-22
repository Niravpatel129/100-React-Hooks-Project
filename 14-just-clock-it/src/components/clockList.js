import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Addtime from "./Addtime";

const SORT_OPTIONS = {};

function ClockList() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("times")
      .onSnapshot(ss => {
        let newTimes = ss.docs.map(data => {
          return { id: data.id, ...data.data() };
        });
        setTimes(newTimes);
      });

    return () => {
      unsub.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Addtime />
      <h3>Times List</h3>
      <div className="Select">
        Sort By:
        <select>
          <option>Fastest</option>
          <option>Slowest</option>
          <option disabled>---</option>
          <option>A-Z</option>
          <option>Z-A</option>
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
