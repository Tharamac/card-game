import React,{Component} from 'react';

export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps)
        // console.log(this.props)
        if(prevProps.attempt != this.props.attempt){
           setTimeout(() => this.setState({active :false}),500) 
        }

    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            console.log(this.props.value)
            this.setState({active : true})
            
        }
        // else{
        //     this.setState({active : false})
        // }
    }

    render(){
        let className = `card ${this.state.active ? 'activeCard' : ''}`
       return(
            <div className={className} onClick={this.activate} >
                {this.props.value}
            </div>
        );
    }
}

