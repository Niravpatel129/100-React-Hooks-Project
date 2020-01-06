import React, { useState } from "react";
import Search from "./Components/Search";
import Axios from "axios";
import Results from "./Components/Results";

function App() {
  const [input, changeInput] = useState("");
  const [movies, updateMovies] = useState([]);

  const apiKey = "http://www.omdbapi.com/?apikey=51dd3a3a&s=";

  const MakeApiCall = async title => {
    const res = await Axios.get(apiKey + title);
    updateMovies(res.data.Search);
  };

  const handleInputChange = e => {
    changeInput(e.target.value);
  };

  const handleSearch = e => {
    if (e.key === "Enter") {
      MakeApiCall(input);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Movies Database</h1>
        <Search
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <Results results={movies} />
      </header>
    </div>
  );
}

export default App;
