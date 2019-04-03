import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { GameComponent } from './components';
import {
    gameInit,
    nextMove,
} from '../../actions';

class Game extends PureComponent {
    static propTypes = {
        id: propTypes.string,
        who: propTypes.string,
        number: propTypes.number,
        username: propTypes.string,
        nextMoveAction: propTypes.func.isRequired,
        gameInitAction: propTypes.func.isRequired,
        game: propTypes.arrayOf(propTypes.shape({})).isRequired,
    };

    static defaultProps = {
        id: '',
        who: '',
        number: 0,
        username: '',
    };

    componentDidMount() {
        const { gameInitAction } = this.props;
        gameInitAction();
    }

    componentWillReceiveProps(props, context) {
        setTimeout(() => {
            console.log(props, context);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

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
            number,
            username,
        } = this.props;
        return (
            <GameComponent
              id={id}
              who={who}
              game={game}
              number={number}
              username={username}
              nextMove={this.nextMove}
            />
        );
    }
}

function mapStateToProps(state) {
    const { game: { info, moves } } = state;
    return { ...info, game: moves };
}
export default connect(mapStateToProps, {
    gameInitAction: gameInit,
    nextMoveAction: nextMove,
})(Game);
