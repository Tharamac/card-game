
import React, { Component } from 'react'


class Surrender extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSurrender : false
        }
    }
 

    surrender = () => {
        if(!this.state.isSurrender){
            document.getElementById('newgame').style.display = "inline-block";
            document.getElementById('surrender').style.display = "none";
            this.setState({isSurrender:true});
           // this.props.getAnswer(this.state.isSurrender);
            console.log(this.state.isSurrender)
            
        }
        
     }
    
   

  render() {
    return (
      <React.Fragment>
        <button id="surrender" class="button"  onClick={this.surrender}>SURRENDER</button>
      </React.Fragment>
    )
  }
}

export default Surrender