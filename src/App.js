import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Surrender from './surrender';

const easy_word = ['ape', 'cat' , 'eat' , 'zip' , 'wet' , 'dry' , 'poll'];
const medium_word = ['Hello', 'Green' , 'Black' , 'Pearl' , 'Dense' , 'sharp' , 'clone'];
const hard_word = ['bottle', 'activate' , 'extend' , 'vertical' , 'charged' , 'mindset' , 'setting'];
var easy_item = easy_word[Math.floor(Math.random()*easy_word.length)];
var medium_item = medium_word[Math.floor(Math.random()*medium_word.length)];
var hard_item = hard_word[Math.floor(Math.random()*hard_word.length)];
var difficulty = easy_item.toUpperCase();
class App extends Component{

  constructor() {
    super()
    this.setDifficulty = React.createRef();
    this.state = {
      isSurrenderConfirm: false,
      difficulty: 'easy'
    };
    
  }
  handleDifficulty = () => {
    this.setDifficulty.current.setDifficulty();
  }

  newgame = () => {
    window.location.reload(false);
  }

  easy = () => {
    this.setDifficulty.current.setDifficulty('easy');
  
  }
  medium = () => {
    this.setDifficulty.current.setDifficulty('medium');
   
  }
  hard = () => {
    this.setDifficulty.current.setDifficulty('hard');
    
  }
  
  getSurrender = (isSurrender) =>{
    if(isSurrender){
      this.setState({isSurrenderConfirm:true});
    }
  }

  getAnswer = (answer) => {
    document.getElementById('complete').innerHTML = `Answer : ${answer}`;
  }


  render() {
    return (
      <div className="App">
        <h1 id="welcome">Try to order this word!</h1>
        <div id="wordcard" >
        {
          <WordCard ref={this.setDifficulty} value={this.state.difficulty} isSurrenderConfirm={this.state.isSurrenderConfirm} getAnswer={this.getAnswer}/>
          // Array.from(word).map(
          //   (c,i) => <CharacterCard value={c} key={i}/>
         // )
        }
        </div>
        <h1 id="complete"></h1>
        <h1 id="nod">Attempt : 0</h1>
        {
          <Surrender getSurrender={this.getSurrender}/>
        }
       <div id="btn-group">
        <button className="newgame button" onClick={this.easy}>EASY</button>
        <button className="newgame button" onClick={this.medium}>MEDIUM</button>
        <button className="newgame button" onClick={this.hard}>HARD</button>
        </div>

        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
       
        
      </div>
    );
  }
}

export default App;
