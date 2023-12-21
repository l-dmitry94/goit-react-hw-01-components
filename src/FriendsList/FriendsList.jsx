import PropTypes from 'prop-types';
import { FriendListItem } from 'FriendListItem/FriendListItem';
import { FriendListStyle, FriendsItem } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
    return (
        <FriendListStyle>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsItem key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </FriendsItem>
            ))}
        </FriendListStyle>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};
