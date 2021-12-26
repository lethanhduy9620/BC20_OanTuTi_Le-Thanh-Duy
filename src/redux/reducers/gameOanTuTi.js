import { PLAYER_SELECT, COMPUTER_RANDOM, START_GAME } from "./../constants/index.js";

let initialState = {
    valuePlayerArr: [
        { value: 'keo', valueImgSrc: './img/OanTuTi/keo.png', isSelect: false },
        { value: 'bua', valueImgSrc: './img/OanTuTi/bua.png', isSelect: true },
        { value: 'bao', valueImgSrc: './img/OanTuTi/bao.png', isSelect: false },
    ],
    valueComputer: { value: 'keo', valueImgSrc: './img/OanTuTi/keo.png', isDefault: true },
    result: '', //'Bạn thắng!', 'Bạn thua!', 'Bạn hòa!'
    winGame: 0,
    totalGame: 0,
};

const randomValueComputer = () => {
    //Random from 0 to 2 for assign computer's value
    let randNumber = Math.floor((Math.random() * 3));
    switch (randNumber) {
        case 0:
            return { value: 'bua', valueImgSrc: './img/OanTuTi/bua.png', isDefault: false };
        case 1:
            return { value: 'bao', valueImgSrc: './img/OanTuTi/bao.png', isDefault: false };
        case 2:
            return { value: 'keo', valueImgSrc: './img/OanTuTi/keo.png', isDefault: false };
        default:
            break;
    }
}

const logicGame = (value, state) => {
    switch (value) {
        case 'keo':
            if (state.valueComputer.value === 'bua') {
                state.result = 'Bạn thua !';
            }
            else if (state.valueComputer.value === 'bao') {
                state.result = 'Bạn thắng !';
                state.winGame++;
            }
            else {
                state.result = 'Bạn hòa !';
            }
            break;
        case 'bua':
            if (state.valueComputer.value === 'bao') {
                state.result = 'Bạn thua !';
            }
            else if (state.valueComputer.value === 'keo') {
                state.result = 'Bạn thắng !';
                state.winGame++;
            }
            else {
                state.result = 'Bạn hòa !';
            }
            break;
        case 'bao':
            if (state.valueComputer.value === 'keo') {
                state.result = 'Bạn thua !';
            }
            else if (state.valueComputer.value === 'bua') {
                state.result = 'Bạn thắng !';
                state.winGame++;
            }
            else {
                state.result = 'Bạn hòa !';
            }
            break;
        default:
            break;
    }
}

const gameOanTuTiReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_SELECT:
            let valuePlayerArr = [...state.valuePlayerArr];
            valuePlayerArr = valuePlayerArr.map((item) => {
                if (item.value === action.payload) {
                    return { ...item, isSelect: true };
                }
                return { ...item, isSelect: false };
            });
            state.valuePlayerArr = valuePlayerArr;
            return { ...state };
        case COMPUTER_RANDOM:
            let valueComputer = { ...state.valueComputer };
            valueComputer = randomValueComputer();
            state.valueComputer = valueComputer;
            return { ...state };
        case START_GAME: {
            let valuePlayer = state.valuePlayerArr.find((value) => {
                return value.isSelect === true;
            });
            logicGame(valuePlayer.value, state);
            state.totalGame++;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default gameOanTuTiReducer;