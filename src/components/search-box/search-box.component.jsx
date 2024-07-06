import { Component } from "react";


class SearchBox extends Component {
    render() {
        return (
        // <input
        //   type="search"
        //   className={this.props.className}
        //   placeholder={this.props.placeholder}
        //   onChange={this.props.onChangeHandler}
        // />
          <div class="form-floating mb-3">
            <input type="search" className={`form-control {this.props.className}`} id="floatingInput" onChange={this.props.onChangeHandler} placeholder={this.props.placeholder}/>
            <label for="floatingInput">{this.props.placeholder}</label>
          </div>
        )
    }
}

export default SearchBox;