import { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    container: (props: BarChartProps) => {
        const { backgroundColor, color } = props;
        return {
            backgroundColor:
                backgroundColor || theme.palette.background.default,
            borderRadius: '10px',
            color: color || theme.palette.primary.contrastText,
            width: '100%',
        };
    },
    bar: (props: BarChartProps) => {
        const { barColor, percentage } = props;
        return {
            backgroundColor: barColor || theme.palette.primary.main,
            borderRadius: '10px',
            paddingRight: '10px',
            textAlign: 'right',
            width: `${percentage}%`,
        };
    },
}));

interface BarChartProps {
    backgroundColor?: string;
    barColor?: string;
    color?: string;
    percentage: number;
}

const BarChart: FC<BarChartProps> = (props) => {
    const classes = useStyles(props);
    const { percentage } = props;
    return (
        <div className={classes.container}>
            <div className={classes.bar}>{percentage}%</div>
        </div>
    );
};

export default BarChart;
