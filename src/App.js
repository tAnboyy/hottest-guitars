import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      guitars: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.json());
        return response.json(); //extracts body (here as array of JS objects)
      })
      .then((users) => this.setState({ guitars: users }));
  }

  //class method, requires this binding
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value }, () =>
  //     console.log(this.state)
  //   );
  // }

  //arrow function used, doesn't require explicit this binding
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { guitars, searchField } = this.state;
    const filteredGuitars = guitars.filter((guitar) =>
      guitar.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search guitars"
          handleChange={this.handleChange}
        />
        <CardList guitars={filteredGuitars} />

        {/* <CardList>
          whatever goes here is the children
          <h1>2nd child in props.children array</h1>
          <p>third</p>
        </CardList> */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.string}
          </a>

          <button
            onClick={() => this.setState({ string: "Hello Again Tanboy!" })}
          >
            Change text
          </button>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
