import React, { Component } from 'react';
import "./css/style.css";
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import { connect } from "react-redux";
import { actRandomComputer, actStartGame } from "./../redux/action";

class OanTuTi extends Component {
    render() {
        return (
            <>
                <div className="gameOanTuXi">
                    <div className="row">
                        <div className="col-4 player">
                            <Player />
                        </div>
                        <div className="col-4 result">
                            <KetQuaTroChoi />
                            <button className='btn btn-success p-3 display-4 mt-5' onClick={this.props.startGame}
                            >Play Game</button>
                        </div>
                        <div className="col-4 computer">
                            <Computer />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            let iterationNumber = 20;
            let count = 0;
            let repeatPlayGame = setInterval(() => {
                dispatch(actRandomComputer());
                count++;
                if (count >= iterationNumber) {
                    clearInterval(repeatPlayGame);
                    dispatch(actStartGame());
                }
            }, 50);
        },
    };
};

export default connect(null, mapDispatchToProps)(OanTuTi);