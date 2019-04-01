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
        game,
        nextMove,
        username,
    } = props;
    return (
        <div>
            <HeaderComponent id={id} username={username} />
            <PlayersMovesComponent game={game} who={who} />
            <FooterComponent nextMove={nextMove} game={game} who={who} />
        </div>
    );
};

GameComponent.propTypes = {
    id: propTypes.string.isRequired,
    who: propTypes.string.isRequired,
    nextMove: propTypes.func.isRequired,
    username: propTypes.string.isRequired,
    game: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default GameComponent;
