import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      developers: [],
      searchField: "",
      title: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ developers: users }))
    );
  }

  render() {
    const { developers, searchField } = this.state;
    const filteredDevelopers = developers.filter((developer) =>
      developer.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Developers Rolodex</h1>
        <SearchBox
          placeholder="search developer"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList developers={filteredDevelopers} />
      </div>
    );
  }
}

export default App;
