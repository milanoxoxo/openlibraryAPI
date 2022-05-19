import React, { useEffect, useState } from "react";
import "./App.css";
import Book from "./components/Book";

function App() {
  const [query, setQuery] = useState("");
  const [bookData, setBookData] = useState();
  const [status, setStatus] = useState("");
  const [filter, setFilter] = useState();

  const getData = async () => {
    if (query !== "") {
      setStatus("Loading data...");
      setFilter("");
      await fetch(`http://openlibrary.org/search.json?q=${query}`)
        .then((respons) => respons.json())
        .then((data) => {
          console.log(data);
          const datas = [];
          data.docs.map((d) => {
            // console.log(d.key, d.author_name[0])
            const res = {
              key: d.key.substr(7),
              title: d.title,
              isbn: d.isbn ? d.isbn[0] : null,
              cover: d.cover_i ? d.cover_i : null,
              author: d.author_name ? d.author_name[0] : "no author find",
              publishdate: d.publish_date
                ? d.publish_date[0]
                : "no publish date find",
            };
            datas.push(res);
          });
          setBookData(datas);
          setStatus("");
        });
    } else {
      setStatus("Please enter your search");
    }
  };
  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const selectFilter = (e) => {
    setFilter(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (value) => {
    if (value == "A-Z") {
      setBookData((prevState) => {
        return [...prevState.sort((a, b) => (a.title > b.title ? 1 : -1))];
      });
    } else if (value == "Recent") {
      setBookData((prevState) => {
        return [
          ...prevState.sort(
            (a, b) =>
              new Date(...b.publishdate.split("/").reverse()) -
              new Date(...a.publishdate.split("/").reverse())
          ),
        ];
      });
    } else {
      return bookData;
    }
  };

  console.log(bookData);

  return (
    <div className="app">
      <h1>Book Searching App</h1>
      <form onSubmit={onSubmit} className="search-form">
        {/* {alert !== "" && <Alert alert={alert} />} */}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search the Book"
        />
        <button
          className="btn"
          type="submit"
          value="Search"
          aria-label="Search"
        >
          Search
        </button>
      </form>
      <div>
        <select
          className="form-select form-select-lg mb-3"
          aria-label="Default select example"
          value={filter}
          onChange={selectFilter}
        >
          <option defaultValue="Default">Filter</option>
          <option value="A-Z">A-Z</option>
          <option value="Recent">Recent Published</option>
        </select>
      </div>
      <h2>{status}</h2>
      <main className="books">
        {bookData &&
          bookData.map((data) => (
            <Book
              key={data.key}
              title={data.title}
              isbn={data.isbn}
              cover={data.cover}
              author={data.author}
              publishdate={data.publishdate}
            />
          ))}
      </main>
    </div>
  );
}

export default App;
