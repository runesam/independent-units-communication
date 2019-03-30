import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#50aadd' },
        secondary: { main: '#c70000' },
        error: { main: '#c70000' },
        assigned: { main: '#cee8ff' },
        hovered: { main: '#dbdfe2' },
        white: { main: '#FFFFFF' },
    },
    typography: {
        useNextVariants: true,
    },
});

const Theme = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
);

Theme.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Theme;
