import React from 'react'
import Game from './Game'
import '../index.css'

class PlayersName extends React.Component{
    constructor(props){
        super(props);
        this.state={
           showHide:  false,
            showInput : true
       };  
        this.inputChange = this.inputChange.bind(this);
        this.startGame = this.startGame.bind(this);
        
       }

    inputChange(event){
        this.setState({
          [event.target.name] :event.target.value
        });
    }
    startGame=(state)=>{
            console.log(this.state);
            console.log(state)
            
            if(this.state.pl1 && this.state.pl2){
                this.setState({
                    showInput : false
                })
            }else{
                alert('Put the names');
            }  
        }
renderInput=()=>{
return(

    <div>
    <input className="form-control" placeholder="player 1 Name" name='pl1' type='text' value= {this.state.pl1} onChange={this.inputChange}></input>
    <input className="form-control" placeholder="player 1 Name" name='pl2' type='text' value={this.state.pl2} onChange={this.inputChange}></input>
    <button className="btn btn-secondary" onClick={() => this.startGame(this.state.showHide)}>Start</button>

    </div>
)
}

 render(){
   if(this.state.showInput === true)
   {
      return this.renderInput()
   }else{
       return <Game  player2={this.state.pl2} player1={this.state.pl1}  play1={this.state.pl1} play2={this.state.pl2} />
   }
}
}
export default PlayersName