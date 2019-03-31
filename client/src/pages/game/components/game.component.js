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
        // number,
        username,
    } = props;
    return (
        <div>
            <HeaderComponent id={id} username={username} />
            <PlayersMovesComponent game={game} />
            <FooterComponent />
        </div>
    );
};

GameComponent.propTypes = {
    id: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    // number: propTypes.number.isRequired,
    game: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default GameComponent;
