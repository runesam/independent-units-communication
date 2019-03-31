import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { GameComponent } from './components';
import {
    gameInit,
    nextMove,
} from '../../actions';

console.log(gameInit);
class Game extends PureComponent {
    static propTypes = {
        id: propTypes.string.isRequired,
        who: propTypes.string.isRequired,
        number: propTypes.number.isRequired,
        username: propTypes.string.isRequired,
        nextMoveAction: propTypes.func.isRequired,
        gameInitAction: propTypes.func.isRequired,
        game: propTypes.arrayOf(propTypes.shape({})).isRequired,
    };

    // componentWillMount() {
    //     const { gameInitAction } = this.props;
    //     gameInitAction();
    // }

    nextMove = (value) => {
        const {
            id,
            game,
            number,
            nextMoveAction,
        } = this.props;
        let current;
        if (game.length) {
            const { result } = [...game].pop();
            current = result;
        } else {
            current = number;
        }
        const quotient = Math.floor((value + current) / 3);
        const remainder = (value + current) % 3;
        const result = quotient + remainder;
        return nextMoveAction({
            id,
            value,
            result,
            current,
        });
    };

    render() {
        const {
            id,
            who,
            game,
            username,
        } = this.props;
        return (
            <GameComponent
              id={id}
              who={who}
              game={game}
              username={username}
              nextMove={this.nextMove}
            />
        );
    }
}

function mapStateToProps(state) {
    const {
        invite,
        players,
        invitation,
    } = state;

    if (Object.keys(invitation).length) {
        const { number, from: { id } } = invitation;

        return {
            id,
            who: 'pong',
            game: state.game,
            number: parseInt(number, 10),
            username: players.find(player => player.id === id).username,
        };
    }

    const id = Object.keys(invite).find(item => invite[item].status === 'accepted');
    const { number } = invite[id] || {};
    const player = players.find(item => item.id === id);

    return {
        id,
        who: 'ping',
        game: state.game,
        username: player.username,
        number: parseInt(number, 10),
    };
}
export default connect(mapStateToProps, {
    gameInitAction: gameInit,
    nextMoveAction: nextMove,
})(Game);
