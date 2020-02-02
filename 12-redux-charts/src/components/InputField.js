import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addData } from "../redux/actions";

function InputField() {
  const dispatch = useDispatch();
  const addDataAction = newObj => dispatch(addData(newObj));

  const [fieldInput, updateField] = useState("");

  const handleInputChange = e => {
    updateField(e.target.value);
  };

  const handleSubmit = () => {
    if (!fieldInput) return;

    makeApiCall(fieldInput);
  };

  const makeApiCall = query => {
    axios
      .get(
        `http://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=${query}`
      )
      .then(res => {
        console.log(res.data.totalResults);

        // Make Redux Action to Input our new object
        addDataAction({
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          key: query,
          value: res.data.totalResults
        });
      });
  };

  return (
    <div>
      <input value={fieldInput} onChange={handleInputChange}></input>
      <button onClick={handleSubmit}>+</button>
    </div>
  );
}

export default InputField;
