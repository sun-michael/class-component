import React, { Component } from 'react';

class SearchKeyword extends Component {
  render() {
    const { searchTerm, jokes, onInputChange, onSearch } = this.props;

    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={onInputChange}
          placeholder="Search for jokes"
        />
        <button onClick={onSearch}>Search</button>
        {/* <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default SearchKeyword;
