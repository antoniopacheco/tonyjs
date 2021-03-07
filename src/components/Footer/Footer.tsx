import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    footer: {
        textAlign: 'right',
        marginTop: '20px',
        marginRight: '20px',
    },
}));

const Footer: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>v: {process.env.REACT_APP_VERSION}</div>
    );
};

export default Footer;
