import React from 'react';
import propTypes from 'prop-types';

import {
    HeaderComponent,
    FooterComponent,
    PlayersMovesComponent,
} from '.';

const GameComponent = (props) => {
    const {
        id,
        who,
        over,
        game,
        number,
        nextMove,
        username,
    } = props;

    return (
        <div>
            <HeaderComponent id={id} username={username} number={number} />
            <PlayersMovesComponent game={game} who={who} over={over} />
            <FooterComponent nextMove={nextMove} game={game} who={who} />
        </div>
    );
};

GameComponent.propTypes = {
    id: propTypes.string.isRequired,
    who: propTypes.string.isRequired,
    over: propTypes.string.isRequired,
    number: propTypes.number.isRequired,
    nextMove: propTypes.func.isRequired,
    username: propTypes.string.isRequired,
    game: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default GameComponent;
