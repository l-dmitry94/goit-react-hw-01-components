import PropTypes from 'prop-types';
import { Description } from 'components/Description/Description';
import { Stats } from 'components/Stats/Stats';
import { Wrapper } from './Profile.styled';

export const Profile = ({ data }) => {
    return (
        <Wrapper>
            <Description
                username={data.username}
                tag={data.tag}
                location={data.location}
                avatar={data.avatar}
            />

            <Stats stats={data.stats} />
        </Wrapper>
    );
};

Profile.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.object.isRequired,
    }).isRequired,
};
