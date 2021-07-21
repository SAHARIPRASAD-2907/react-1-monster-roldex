import React,{Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list";
import {SearchBoxTxt} from "./components/search-box/search-box-txt";

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField:''

    };

    this.handleChange = this.handleChange.bind(this)
   }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())  // convert api to json
        .then(users => this.setState({monsters:users})) //read json string and mapping to state

  }

  handleChange(e){
    this.setState({searchField:e.target.value})
  }

  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBoxTxt
              placeholder = "search monsters"
              handleChange = {this.handleChange}
          />
          <CardList monsters = {filteredMonsters}/>
        </div>
    );
  }
}

export default App;
