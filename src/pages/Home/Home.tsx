import { FC } from 'react';
import Grid from '@material-ui/core/Grid';

/* components */
import AboutMe from './AboutMe';
import Skills from './Skills';
import Tools from './Tools';

const Home: FC = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AboutMe />
            </Grid>
            <Grid item xs={12} md={6}>
                <Skills />
            </Grid>
            <Grid item xs={12} md={6}>
                <Tools />
            </Grid>
        </Grid>
    );
};

export default Home;
