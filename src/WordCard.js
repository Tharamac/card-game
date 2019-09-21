import React,{ Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';
import { thisTypeAnnotation } from '@babel/types';


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
        this.state = prepareStateFromWord(this.props.value)
        console.log(props.isSurrenderConfirm);
      
    }
    
    

    activationHandler = (c) =>{
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})

      
        if(guess.length == this.state.chars.length){
            console.log(guess.join('').toString())
            console.log(this.state.chars.join('').toString())
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                this.setState({guess: [], complete: true})
                document.getElementById('complete').innerHTML = `Congratulations!`
                
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
                    Array.from(this.props.value).map(
                        (c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>
                    )
                }
            </div>
        );
    }
}