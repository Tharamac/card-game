import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Surrender from './surrender';


class App extends Component{

  constructor() {
    super()
    this.setDifficulty = React.createRef();
    this.state = {
      isSurrenderConfirm: false,
      difficulty: 'easy'
    };
    
  }
 

  newgame = () => {
    window.location.reload(false);
  }

  handleDifficulty = (e) => {
    let difficulty = e.target.id;
    console.log(e.target.id)
    if(difficulty == 'easy'){
      this.setDifficulty.current.setDifficulty('easy');
      this.setState({difficulty: 'easy'})
    }else if(difficulty == 'medium'){
      this.setDifficulty.current.setDifficulty('medium');
      this.setState({difficulty: 'medium'})
    }else if(difficulty == 'hard'){
      this.setDifficulty.current.setDifficulty('hard');
      this.setState({difficulty: 'hard'})
    }
    // this.forceUpdate();

    document.getElementById('maingame').style.display = 'block';
    document.getElementById('btn-group').style.display = 'none';
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
        <h1 id="welcome">Welcome to ReactCardGame!</h1>
        <div id="maingame">
          <h1 id="info">Try to order this word!</h1>
            <div id="wordcard">
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
        </div>
       <div id="btn-group">
        <button id="easy" className="newgame button" onClick={this.handleDifficulty}>EASY</button>
        <button id="medium" className="newgame button" onClick={this.handleDifficulty}>MEDIUM</button>
        <button id="hard"className="newgame button" onClick={this.handleDifficulty}>HARD</button>
        </div>

        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
       
        
      </div>
    );
  }
}

export default App;
