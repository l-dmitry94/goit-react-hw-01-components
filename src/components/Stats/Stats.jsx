import PropTypes from 'prop-types';
import { Item, Label, Quantity, StatsList } from './Stats.styled';

export const Stats = ({ stats }) => {
    const { followers, views, likes } = stats;

    return (
        <StatsList>
            <Item>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </Item>
            <Item>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </Item>
            <Item>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </Item>
        </StatsList>
    );
};

Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
