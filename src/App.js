import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";

class App extends Component{
  render() {
    return (
      <div className="App">
        {
          <WordCard value="Ma"/>
          // Array.from(word).map(
          //   (c,i) => <CharacterCard value={c} key={i}/>
          // )
          
        }
        <h2 id="nod">Hello World!</h2>
      </div>
    );
  }
}

export default App;
