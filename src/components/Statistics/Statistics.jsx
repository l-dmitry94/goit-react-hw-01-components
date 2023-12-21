import PropTypes from 'prop-types';
import { StatsList } from 'components/StatsList/StatsList';
import { Title } from 'components/Title/Title';
import { Wrapper } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Wrapper>
            <Title title={title} />
            <StatsList stats={stats} />
        </Wrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};
