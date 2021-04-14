import React, { Component } from 'react';
import './App.css';
import prostar from './prostars.json';

class App extends Component {
  constructor(){
    super();
    this.state={
      arr:prostar.slice(0,5)
    };
  }

  getRandom()
  {
    var rand=Math.floor(Math.random()*50);
    var temp = prostar[rand];
    let addedItems = this.state.arr;
    addedItems.push(temp);
    this.setState({ arr: addedItems});
  }

  sortByName(){
    let addedItems = this.state.arr;
    addedItems.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({ arr: addedItems});
  }

  sortByPopularity()
  {
    let addedItems = this.state.arr;
    addedItems.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0))
    this.setState({ arr: addedItems});
  }

  render(){
    return (
      <div className="App">
        <div className="header1">
          <span>Prostar</span>
        </div>
        <div className="container">
          <div className="options">
            <button className="button" onClick={()=>this.getRandom()}>Get Random Contact</button>
            <button className="button" onClick={()=>this.sortByName()}>Sort By Name</button>
            <button className="button" onClick={()=>this.sortByPopularity()}>Sort By Popularity</button>
          </div>
        <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {
          this.state.arr.map((item)=>{
            return (<tr>
              <td>
                <img src={item.pictureUrl} height="50px" width="40px"/>
              </td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              <td>
                <button className="delete">Delete</button>
              </td>
            </tr>)
          })
        }
        </table>
        </div>
      </div>
    );
  }
    
}

export default App;
