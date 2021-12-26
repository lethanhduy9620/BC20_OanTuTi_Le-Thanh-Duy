import React, { Component } from 'react';
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
    render() {
        return (
            <>
                <div className='display-4 text-warning text'>
                    {this.props.result ? this.props.result : "Trò chơi Oẳn Tù Xì"}
                </div>
                <div className='display-4 text-success text' >Số bàn thắng:
                    <span className='text-warning text'>
                        {" " + this.props.winGame}
                    </span>
                </div>
                <div className='display-4 text-success text'>Tổng số bàn chơi:
                    <span className='text-warning text'>
                        {" " + this.props.totalGame}
                    </span>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.gameOanTuTiReducer.result,
        winGame: state.gameOanTuTiReducer.winGame,
        totalGame: state.gameOanTuTiReducer.totalGame,
    };
};

export default connect(mapStateToProps, null)(KetQuaTroChoi);