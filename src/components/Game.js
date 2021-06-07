import React, { Component } from 'react';
import Cell from './cell';
import Table from './table-cell';
import Timer from './Timer';
import '../index.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 'O',
      cells: [null, null, null, null, null, null, null, null, null],
      count: 0,
      prob: [],
      second1: 0,
      minutes: 0,
      second2: 0,
      showHide: false,
      showInput: true,
    };
  }

  handleId = (id) => {
    let currentvalue = this.state.cells[id];
    if (currentvalue) {
      return;
    }
    this.state.cells[id] = this.state.next;
    let newNext = this.state.next === 'O' ? 'X' : 'O';
    this.setState({
      next: newNext,
      count: (this.state.count += 1),
    });

    if(this.state.next === 'O')
    {
      this.toggleTimer1();
      this.countdownTimer2();
    }
    else{
      this.toggleTimer2();
      this.countdownTimer1();
    }
    const table = document.querySelector('Table').children[1];
    console.log(table);
    const data = `<tr>
              <th scope="row">${this.state.count}</th>
              <th>${this.state.next === 'O' ? this.props.player1 : this.props.player2}</th>
              <th>${id}</th>
              </tr>`;
    table.innerHTML += data;
    if (this.calculateWinner(this.state.cells) || this.state.cells[id]) {
      return;
    }
  };

  calculateWinner(state) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return {
          cells: state[a],
          prob: lines[i],
        };
      }
    }
    return null;
  }

  delete = () => {
    const table = document.querySelector('Table').children[1];
    const status = document.querySelector('.status');
    status.innerHTML = '';


    table.innerHTML = '';
    this.resetTimer();
    this.toggleTimer1();
    this.toggleTimer2();
    this.setState({
      count: 0,
      cells: this.state.cells.fill(null),
    });
  };

  startGame = () => {
    console.log('this');
    this.countdownTimer1();
  };

  // componentDidMount() {
  //   this.countdownTimer1();
  //   this.countdownTimer2();
  // }
  countdownTimer1 = () => {
    this.id = setInterval(() => {
      if (this.state.second1 > 60) {
        clearInterval(this.id);
        return;
      }
      this.setState({
        seconds: this.state.second1 += 1,
      });
      console.log(this.state.second1);
    }, 1000);
  };

  countdownTimer2 = () => {
    this.id = setInterval(() => {
      if (this.state.second2 > 60) {
        clearInterval(this.id);
        return;
      }
      this.setState({
        seconds: this.state.second2 += 1,

      });
      console.log(this.state.second2);
    }, 1000);
  };

  toggleTimer1 = () => {
    if (this.id) {
      clearInterval(this.id);
    }
  };

  toggleTimer2 = () => {
    if (this.id) {
      clearInterval(this.id);
      // this.id = null;
    } 
  };

  resetTimer = () => {
    this.setState({
      second1: 0,
      second2: 0
    });
  };

  render() {
    const status = document.querySelector('.status');
    const winner = this.calculateWinner(this.state.cells);
    if (winner) {
      status.innerHTML = `Winner: ${winner.cells === 'O' ? this.props.player1 : this.props.player2}`;
      this.toggleTimer1();
      this.toggleTimer2();
    }
    if (this.state.count == 9) {
      status.innerHTML = 'The Match Is a Draw';
    }
    return (
      <div className='main'>
        <header>
          <p className='tic'>Tic-Tac-Toe</p>
          <p className='status'></p>
        </header>
        <p className='tictac'></p>
        <div></div>
        <div className='board'>
          <div>
            <div className='timertoggle timer1'>
              <p>{this.props.player}</p>
              <h3>
                {this.state.minutes} : {this.state.second1}
              </h3>
              <button className='btn btn-secondary' onClick={this.toggleTimer1}>
                {this.props.player1}
              </button>
            </div>
            <div className='timertoggle timer2'>
              <p>{this.props.player}</p>
              <h3>
                {this.state.minutes} : {this.state.second2}
              </h3>
              <button className='btn btn-secondary' onClick={this.toggleTimer2}>
                {this.props.player2}
              </button>
            </div>
          </div>

          {this.state.cells.map((
            val,
            index //val--null, index--0
          ) => (
            <Cell
              className='buttoncell'
              id={index}
              val={winner ? winner.prob : undefined}
              value={val}
              onClickCell={this.handleId}
              key={index}
              count={this.state.count}
            />
          ))}
          <button className='btn btn1 btn-secondary' onClick={this.delete.bind(this)}>
            Play Again!
          </button>
          <button className='btn resetbutton btn-secondary' onClick={this.countdownTimer1}>
            Start
          </button>
        </div>
        <Table />
      </div>
    );
  }
}
export default Game;
