import React, { useState } from "react";
import firebase from "../firebase";

function Addtime() {
  const [inputValues, setInputValues] = useState({ title: "", time: "" });

  const handleInputChange = e => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("times")
      .add({ title: inputValues.title, time: inputValues.time })
      .then(() => {
        setInputValues({ title: "", time: "" });
      });
  };

  return (
    <div>
      <h4>Add Time Entry</h4>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValues.title}
          name="title"
        ></input>
      </div>
      <div>
        <label>Time</label>
        <input
          type="number"
          onChange={handleInputChange}
          value={inputValues.time}
          name="time"
        ></input>
      </div>
      <button onClick={handleFormSubmit}>Add</button>
    </div>
  );
}

export default Addtime;
