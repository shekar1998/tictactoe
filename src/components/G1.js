import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Board from './Game'


class Game extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            players : {
                player1 : null, 
                player2: null
        }
        
        };
    }

    updatePlayers = (name1, name2) => {
        this.setState({
            player1: name1,
            player2: name2
        })
    }

    render() {
        return (
            <div className="game">
                {
                    <Board
                    playerName1 ={this.state.player1}
                    playername2 ={this.state.player2}
                    /> 
                }
            </div>
        )
    }
}

export default Game;