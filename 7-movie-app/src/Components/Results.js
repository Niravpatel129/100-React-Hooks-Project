import React from "react";
import Result from "./Result";

function Results({ results }) {
  return (
    <section className="results">
      {results.map(result => {
        console.log(result);
        return <Result key={result.imdbID} result={result} />;
      })}
    </section>
  );
}

export default Results;
