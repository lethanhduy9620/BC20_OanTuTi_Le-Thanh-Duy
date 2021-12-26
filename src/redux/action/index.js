import { COMPUTER_RANDOM, START_GAME, PLAYER_SELECT } from "../constants";

const actRandomComputer = () => {
    return {
        type: COMPUTER_RANDOM,
    };
};

const actStartGame = () => {
    return {
        type: START_GAME,
    };
}

const actSelectGame = (value) => {
    return {
        type: PLAYER_SELECT,
        payload: value,
    };
}

export { actRandomComputer, actStartGame, actSelectGame };