import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Language from './Language';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

interface NavProps {
    onThemeChange: () => void;
    darkState: boolean;
}

const Nav: FC<NavProps> = ({ onThemeChange, darkState }) => {
    const classes = useStyles();
    useTranslation('menu', { useSuspense: false });

    return (
        <div className={classes.root}>
            <AppBar color="default" position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link color="inherit" component={RouterLink} to="/">
                            <Trans i18nKey="menu.home">Home</Trans>
                        </Link>
                    </Typography>

                    {/* TODO */}
                    {/* <Typography variant="h6" className={classes.title}>
                        Projects
                    </Typography> */}
                    <Language />
                    <IconButton
                        edge="end"
                        onClick={onThemeChange}
                        aria-label="delete"
                    >
                        {darkState ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
