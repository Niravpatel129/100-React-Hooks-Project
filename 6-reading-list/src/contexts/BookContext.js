import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Harry Potter", id: 1 },
    { title: "The Rain Catcher", id: 2 },
    { title: "Dark Souls", id: 3 }
  ]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
