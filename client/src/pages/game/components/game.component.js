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
        game,
        nextMove,
        username,
    } = props;
    return (
        <div>
            <HeaderComponent id={id} username={username} />
            <PlayersMovesComponent game={game} />
            <FooterComponent nextMove={nextMove} />
        </div>
    );
};

GameComponent.propTypes = {
    id: propTypes.string.isRequired,
    nextMove: propTypes.func.isRequired,
    username: propTypes.string.isRequired,
    game: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default GameComponent;
