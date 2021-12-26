import React, { Component } from 'react';
import { connect } from "react-redux";

class Computer extends Component {
    render() {
        // Add keyframes when render img element
        let keyframe = `@keyframes movedown${Date.now()}
                         {0% {top: -15px;}
                         25% {top: 15px;}
                         50% {top: -15px;}
                         75% {top: 15px;}
                         100% {top: 0px;}}`;

        return (
            <>
                <div className='think'>
                    <style>
                        {/* Tenary Operator prevents from starting animation when page's reloaded */}
                        {this.props.valueComputer.isDefault ? '' : keyframe}
                    </style>
                    <img className='animation'
                        style={{ animation: `movedown${Date.now()} 0.5s` }}
                        src={this.props.valueComputer ? this.props.valueComputer.valueImgSrc : ""}
                        alt={this.props.valueComputer ? this.props.valueComputer.value : ""} />
                </div>
                <div className='speech-bubble'></div>
                <img src='./img/OanTuTi/playerComputer.png' alt='playerComputer' />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        valueComputer: state.gameOanTuTiReducer.valueComputer,
    };
}

export default connect(mapStateToProps, null)(Computer);