import PropTypes from 'prop-types';
import { Label, Percentage } from './StatsItem.styled';

export const StatsItem = ({ label, percentage }) => {
    return (
        <>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </>
    );
};

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
