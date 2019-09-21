import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';


const word = ['Hello', 'Green'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{

  newgame = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <h1 id="welcome">Try to order this word!</h1>
        {
          <WordCard value={item.toUpperCase()}/>
          // Array.from(word).map(
          //   (c,i) => <CharacterCard value={c} key={i}/>
          // )
        }
        <h1 id="nod">Attempt : 0</h1>
        <button id="newgame" onClick={this.newgame}>NEW GAME</button>
        
       
        
      </div>
    );
  }
}

export default App;
