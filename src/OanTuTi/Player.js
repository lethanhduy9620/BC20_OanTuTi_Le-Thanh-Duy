import React, { Component } from 'react';
import { connect } from "react-redux";
import { actSelectGame } from '../redux/action';

class Player extends Component {

    handleSelect = (value) => {
        this.props.playerSelect(value);
    }

    render() {
        const { valuePlayerArr } = this.props;
        let selectedValue = valuePlayerArr.find((value) => {
            return value.isSelect === true;
        });
        return (
            <>
                <div className='think'>
                    <img
                        src={selectedValue ? selectedValue.valueImgSrc : ""}
                        alt={selectedValue ? selectedValue.value : ""}
                    />
                </div>
                <div className='speech-bubble'></div>
                <img src='./img/OanTuTi/player.png' alt='player' />
                <div className='row'>
                    {valuePlayerArr.map((value) => {
                        return (
                            <div className='col-4' key={value.value}>
                                <button
                                    className={`btnItem ${selectedValue.value === value.value ? "selected" : ""}`}
                                    onClick={() => { this.handleSelect(value.value) }}>
                                    <img src={value.valueImgSrc} alt={value.value} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        valuePlayerArr: state.gameOanTuTiReducer.valuePlayerArr,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playerSelect: (value) => {
            dispatch(actSelectGame(value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
