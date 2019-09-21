import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Surrender from './surrender';

const easy_word = ['ape', 'cat' , 'eat' , 'zip' , 'wet' , 'dry' , 'poll'];
const medium_word = ['Hello', 'Green' , 'Black' , 'Pearl' , 'Dense' , 'sharp' , 'clone'];
const hard_word = ['Hello', 'Green' , 'Black' , 'Pearl' , 'Dense' , 'sharp' , 'clone'];
var item = easy_word[Math.floor(Math.random()*easy_word.length)];

class App extends Component{

  
  newgame = () => {
    window.location.reload(false);
  }
  
  getAnswer = (isSurrender) =>{
    console.log(isSurrender);  

  }


  render() {
    return (
      <div className="App">
        <h1 id="welcome">Try to order this word!</h1>
        {
          <WordCard value={item.toUpperCase()} solution={this.getAnswer}/>
          // Array.from(word).map(
          //   (c,i) => <CharacterCard value={c} key={i}/>
          // )
        }
        <h1 id="complete"></h1>
        <h1 id="nod">Attempt : 0</h1>
        {
          <Surrender></Surrender>
        }
       
        <button id="newgame" class="button" onClick={this.newgame}>NEW GAME</button>
        
       
        
      </div>
    );
  }
}

export default App;
