import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
