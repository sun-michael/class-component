import { Component } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import SearchKeyword from "./components/search-keyword/search-keyword.component";
class App extends Component {
  constructor() {
    super();

    this.state = { jokes: [], total: "", searchField: "", searchTerm: "" };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("https://icanhazdadjoke.com/search?term=cat", {
    fetch("https://icanhazdadjoke.com/search?limit=30", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("h2=", data);
        this.setState(
          () => {
            return { jokes: data.results, total: data.total_jokes };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  //for filtering results
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField });
  };

  //for searching keywords
  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ jokes: data.results });
      })
      .catch((error) => console.error("Error fetching jokes:", error));
  };

  render() {
    const filteredJokes = this.state.jokes.filter((joke) => {
      return joke.joke.toLocaleLowerCase().includes(this.state.searchField);
    });
    const { searchTerm, jokes, total } = this.state;
    console.log("search=", jokes);
    return (
      <div className="App">
        <div className="container">
          <h1 className="app-header m-3">Who doesn't love dad jokes?</h1>
          <p>We found {jokes.length} dad jokes :)</p>
          <SearchBox
            onChangeHandler={this.onSearchChange}
            className="search-box"
            placeholder="Filter from results"
          />
          <p>current search term: {searchTerm}</p>
          <SearchKeyword
            searchTerm={searchTerm}
            jokes={jokes}
            onInputChange={this.handleInputChange}
            onSearch={this.handleSearch}
            placeholder="Get new jokes by keyword (e.g. cat, dog, coffee..)"
          />

          <CardList jokes={filteredJokes} />
        </div>
      </div>
    );
  }
}

export default App;
