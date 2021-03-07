import { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        height: '100vh',
        justifyContent: 'center',
    },
}));

const PageLoader: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
};

export default PageLoader;
