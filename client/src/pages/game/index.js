import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { GameComponent } from './components';
import {
    gameInit,
} from '../../actions';

console.log(gameInit);
class Game extends PureComponent {
    static propTypes = {
        id: propTypes.string.isRequired,
        number: propTypes.number.isRequired,
        username: propTypes.string.isRequired,
        gameInitAction: propTypes.func.isRequired,
        game: propTypes.arrayOf(propTypes.shape({})).isRequired,
    };

    componentDidMount() {
        const { gameInitAction } = this.props;
        gameInitAction();
    }

    render() {
        const {
            id,
            game,
            number,
            username,
        } = this.props;
        return (
            <GameComponent
              id={id}
              game={game}
              number={number}
              username={username}
            />
        );
    }
}

function mapStateToProps(state) {
    // const {
    //     invite,
    //     players,
    //     invitation,
    // } = state;
    // if (Object.keys(invitation).length) {
    //     const { number, from: { id } } = invitation;
    //     return {
    //         number: parseInt(number, 10),
    //         id,
    //         username: players.find(player => player.id === id).username,
    //     };
    // }
    // const id = Object.keys(invite).find(item => invite[item].status === 'accepted');
    // const { number } = invite[id];
    // const player = players.find(item => item.id === id) || {};

    const number = '123123';
    const id = 'LEG-TNuZpPV4QUvQAAAE';
    const player = { username: 'USERNAME' };
    return {
        id,
        game: state.game,
        username: player.username,
        number: parseInt(number, 10),
    };
}
export default connect(mapStateToProps, { gameInitAction: gameInit })(Game);
