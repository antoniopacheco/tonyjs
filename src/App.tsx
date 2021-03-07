import { useMemo, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '56px',
        paddingTop: '1em',
    },
}));
function App() {
    const classes = useStyles();
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkState, setDarkState] = useState(true);
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkState ? 'dark' : 'light',
                },
            }),
        [darkState],
    );

    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Nav darkState={darkState} onThemeChange={handleThemeChange} />
                <Container className={classes.container} maxWidth="lg">
                    <Routes />
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
