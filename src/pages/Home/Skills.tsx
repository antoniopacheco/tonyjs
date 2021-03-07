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

const Skills: FC = () => {
    const { t } = useTranslation();
    return (
        <Card variant="outlined">
            <CardHeader title={t('skills.mySkills')} />
            <CardContent>
                <p>HTML</p>
                <BarChart barColor={red[600]} percentage={95} />
                <p>CSS</p>
                <BarChart barColor={pink[600]} percentage={90} />
                <p>JavaScript</p>
                <BarChart barColor={purple[600]} percentage={85} />
                <p>PHP</p>
                <BarChart barColor={deepPurple[600]} percentage={65} />
                <p>Googling</p>
                <BarChart barColor={indigo[600]} percentage={100} />
            </CardContent>
        </Card>
    );
};

export default Skills;
