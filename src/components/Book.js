import React, { useState } from "react";

const Book = (props) => {
  // const { title, isbn, author, publishdate } = props.data;
  const image = `https://covers.openlibrary.org/b/isbn/${props.isbn}-L.jpg`;
  /*https://covers.openlibrary.org/b/isbn/9788702027709-S.jpg*/

  return (
    <div className="book">
      <img src={image} alt={props.title} />
      {/* <div className="text"> */}
        <h2>{props.title}</h2>
        <span>Author:{props.author}</span>
        <span>Published Date:{props.publishdate}</span>
      {/* </div> */}
    </div>
  );
};

export default Book;
