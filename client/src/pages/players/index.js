import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { socketInit } from '../../actions';

class Players extends PureComponent {
    static propTypes = {
        socketInit: propTypes.func.isRequired,
    };

    componentDidMount() {
        const { socketInit: socketInitAction } = this.props;
        socketInitAction();
    }

    render() {
        return <div>players pages goes here</div>;
    }
}

export default connect(undefined, { socketInit })(Players);
