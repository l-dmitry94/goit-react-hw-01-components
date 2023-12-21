import PropTypes from 'prop-types';
import { Wrapper, Avatar, Name, Tag, Location } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
    return (
        <Wrapper>
            <Avatar src={avatar} alt={username} />
            <Name>{username}</Name>
            <Tag className="tag">@{tag}</Tag>
            <Location className="location">{location}</Location>
        </Wrapper>
    );
};

Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
