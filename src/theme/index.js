import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FE6B8B'
        },
        secondary: {
            main: '#FF8E53'
        },
    },
    typography: {
        button: {
            fontSize: 24,
            letterSpacing: 2,
            textTransform: 'none',
            fontWeight: 'bold'
        }
    }
});

export default theme;
