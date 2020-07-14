import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      monsters: []
    }
    
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  
   

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=> {
            return <h1>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}
export default App;
