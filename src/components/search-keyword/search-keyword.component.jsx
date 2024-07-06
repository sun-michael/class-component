import React, { Component } from 'react';

class SearchKeyword extends Component {
  render() {
    const { searchTerm, onInputChange, onSearch } = this.props;

    return (
      <div class="input-group mb-3">
        {/* <input
          type="text"
          value={searchTerm}
          onChange={onInputChange}
          placeholder="Search for jokes"
        />
        <button onClick={onSearch}>Search</button> */}

        {/* <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul> */}

          <div class="form-floating">
            <input type="search" className={`form-control ${this.props.className}`} id="floatingInput" 
              value={searchTerm} onChange={onInputChange} placeholder={this.props.placeholder}/>
            <label for="floatingInput">{this.props.placeholder}</label>
          </div>
          <button class="btn btn-primary" type="button" id="button-addon2" onClick={onSearch}>Submit</button>
      </div>
    );
  }
}

export default SearchKeyword;
