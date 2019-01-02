// tslint:disable:no-console
import * as React from 'react';

interface IGamePlayerClockProps {
    playerId?: string,
}

interface IGamePlayerClockState {
    time: number,
    isClicked: boolean,
}

let handleInterval: any;

class GamePlayerClock extends React.Component<IGamePlayerClockProps, IGamePlayerClockState> {
   
    constructor(props: any){
        super(props);
 
        this.state = {
            time: 5,
            isClicked: false,
        }
    }

    public stopCountDown = () => {
        this.setState({
            time: 0,
            isClicked: false,
          })
    }

    public timer = () => {
       const time = this.state.time - 1
       this.setState({ time })
     // something
     if (time === 0) {
        console.log('time inside if 0',time)
        clearInterval(handleInterval)
        handleInterval = 0;
    }
}

    public startCountdown = () => {
        this.setState({ isClicked: true })
        handleInterval = setInterval(this.timer, 1000)
    }

    public render() {
        return(
            <>
               <p>{this.state.time}</p>
               <button onClick={this.startCountdown}>Start</button>
            </>
        )
    }
}

export default GamePlayerClock