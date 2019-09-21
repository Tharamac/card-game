import React,{ Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';
import { thisTypeAnnotation } from '@babel/types';

const easy_word = ['ape', 'cat' , 'eat' , 'zip' , 'wet' , 'dry' , 'poll'];
const medium_word = ['Hello', 'Green' , 'Black' , 'Pearl' , 'Dense' , 'sharp' , 'clone'];
const hard_word = ['bottle', 'activate' , 'extend' , 'vertical' , 'charged' , 'mindset' , 'setting'];
var easy_item = easy_word[Math.floor(Math.random()*easy_word.length)];
var medium_item = medium_word[Math.floor(Math.random()*medium_word.length)];
var hard_item = hard_word[Math.floor(Math.random()*hard_word.length)];
var word =easy_item.toUpperCase();

//what the hell is that?
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess:[],
        completed:false
    }
}

export default class WordCard extends Component{

    constructor(props){
        super(props)
        console.log(props.value)
       this.state = prepareStateFromWord(word)
      //  console.log(props.isSurrenderConfirm);
      
    }
    
    setDifficulty = (difficulty) =>{
        console.log(difficulty);
        if(difficulty == 'easy')
            word = easy_item.toUpperCase();
        else if(difficulty == 'medium')
            word = medium_item.toUpperCase();
        else if(difficulty == 'hard')
            word = hard_item.toUpperCase();
        this.forceUpdate();
        this.state = prepareStateFromWord(word)
        console.log(this.state)
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.state)
    }

    activationHandler = (c) =>{
        this.forceUpdate();
        console.log(this.state)
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            console.log(guess.join('').toString())
            console.log(this.state.chars.join('').toString())
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                this.setState({guess: [], complete: true})
                document.getElementById('complete').innerHTML = `Congratulations!`
                document.getElementById('newgame').style.display = "inline-block";
                document.getElementById('surrender').style.display = "none";
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('nod').innerHTML = `Attempt : ${this.state.attempt} `
      
            }
           //TODO:: clear this line!
        }
        //console.log(this.state)
         

    }

    render(){
        if(this.props.isSurrenderConfirm){
            this.props.getAnswer(this.state.chars.join(''))

        }
        return(
            
            <div>
                {
                    Array.from(word).map(
                        (c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} isSurrenderConfirm={this.props.isSurrenderConfirm} {...this.state}/>
                    )
                }
            </div>
        );
    }
}