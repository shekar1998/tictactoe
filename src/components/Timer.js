import React, { Component } from "react";

class Timer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            second : 0, 
            minutes : 0,
        };
    }

    countdownTimer =() => {
        this.id = setInterval(() => {
            if(this.state.second > 60)
            {
                clearInterval(this.id);
                return;
            }
            this.setState({
                seconds : this.state.seconds + 1,
            })
            
        },1000)
    };

    toggleTimer = () => {
        if(this.id)
        {
            clearInterval(this.id);
            this.id = null ;
        }else{
            this.countdownTimer();
        }
    };

    resetTimer = () => {
        this.setState({
            seconds : 0
        })
    }

    componentDidMount() 
    {
        this.countdownTimer();
    }

    render() {
        return(
            <div className="timertoggle" >
                <h3>
                    {this.state.minutes} : {this.state.seconds}
                </h3>
                <button className="btn btn-secondary" onClick = {this.resetTimer}>Reset</button>
                <button className="btn btn-secondary" onClick = {this.toggleTimer}>Toggle</button>
            </div>
        )
    }

}

export default Timer;