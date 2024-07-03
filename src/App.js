import { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import SearchKeyword from "./components/search-keyword/search-keyword.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [jokes, setJokes] = useState([]); //[value, setValue
  const [filteredJokes, setFilteredJokes] = useState(jokes);
  const [stringField, setStringField] = useState(""); //[value, setValue

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/search?limit=30", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setJokes(res.results);
      });
  }, []);
  useEffect(() => {
    const newFilteredJokes = jokes.filter((joke) => {
      return joke.joke.toLocaleLowerCase().includes(searchField);
    });
    setFilteredJokes(newFilteredJokes);
  }, [jokes, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    // this.setState({ searchField });
  };

  const onStringChange = (event) => {
    setStringField(event.target.value);
  };
  return (
    <div className="App">
      <h1 className="app-header">Who doesn't love dad jokes?</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="search here"
      />
      <SearchBox onChangeHandler={onStringChange} placeholder="search here2" />
      {/* <SearchKeyword
        searchTerm={searchTerm}
        jokes={jokes}
        onInputChange={this.handleInputChange}
        onSearch={this.handleSearch}
      /> */}
      <CardList jokes={filteredJokes} />
    </div>
  );
};

export default App;
