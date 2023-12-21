import PropTypes from 'prop-types';
import { StatsItem } from "components/StatsItem/StatsItem";
import { ItemStyle, List } from './StatsList.styled';

export const StatsList = ({stats}) => {
    return (
        <List>
            {stats.map(({id, label, percentage})=> (
                <ItemStyle key={id}>
                    <StatsItem label={label} percentage={percentage}/>
                </ItemStyle>
                
            ))}
        </List>
    );
};

StatsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
}