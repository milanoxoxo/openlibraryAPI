import React, { useState } from "react";

const Book = (props) => {
  let image
  if(props.cover !== null){
    image = `https://covers.openlibrary.org/b/id/${props.cover}-L.jpg`;
  }else{
    image = `https://covers.openlibrary.org/b/isbn/${props.isbn}-L.jpg`
  }
  
  return (
    <div className="book">
      <img src={image} alt={props.title} />
        <h2>{props.title}</h2>
        <span>Author:{props.author}</span>
        <span>Published Date:{props.publishdate}</span>
    </div>
  );
};

export default Book;
