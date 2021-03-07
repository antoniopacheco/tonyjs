import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    cover: {
        display: 'inline-block',
        height: 151,
        width: 151,
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-end',
        },
    },
    regards: {
        fontSize: '3em',
    },
    socialList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '& li': {
            display: 'inline',
        },
    },
}));

const AboutMe: FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <CardMedia
                    className={classes.cover}
                    image="tony.jpg"
                    title="Live from space album cover"
                />
                <div className={classes.description}>
                    <div className={classes.regards}>
                        <Trans i18nKey="aboutMe.part1">
                            Hi, I'm Antonio Pacheco
                        </Trans>
                    </div>
                    <div>
                        <Trans i18nKey="aboutMe.part2">
                            senior solutions engineer @ capital-group
                        </Trans>
                    </div>
                    <div>
                        <ul className={classes.socialList}>
                            <li>
                                <IconButton
                                    target="blank"
                                    href="https://github.com/antoniopacheco"
                                    aria-label="github page"
                                >
                                    <GitHubIcon fontSize="large" />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton
                                    target="blank"
                                    href="https://www.linkedin.com/in/jesus-pacheco-morales-20153672/"
                                    aria-label="linkedIn page"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton
                                    target="blank"
                                    href="https://twitter.com/pacheco_dev"
                                    aria-label="twitter"
                                >
                                    <TwitterIcon fontSize="large" />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton
                                    target="blank"
                                    href="mailTo:me@tonyjs.dev"
                                    aria-label="email me"
                                >
                                    <MailOutlineIcon fontSize="large" />
                                </IconButton>
                            </li>
                        </ul>
                        <Button
                            target="blank"
                            href={`${t('aboutMe.resumeLink')}`}
                            variant="outlined"
                        >
                            <Trans i18nKey="aboutMe.resume">Resume</Trans>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AboutMe;
