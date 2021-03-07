import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import BarChart from 'components/graphs/BarChart';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';

const Tools: FC = () => {
    const { t } = useTranslation();
    return (
        <Card variant="outlined">
            <CardHeader title={t('skills.tools')} />
            <CardContent>
                <p>ReactJS</p>
                <BarChart barColor={red[400]} percentage={90} />
                <p>Angular</p>
                <BarChart barColor={pink[400]} percentage={60} />
                <p>TypeScript</p>
                <BarChart barColor={purple[400]} percentage={60} />
                <p>Jest</p>
                <BarChart barColor={deepPurple[400]} percentage={65} />
                <p>GIT</p>
                <BarChart barColor={indigo[400]} percentage={85} />
            </CardContent>
        </Card>
    );
};

export default Tools;
