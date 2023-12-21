import PropTypes from 'prop-types';
import { FriendListItem } from 'FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className="item" key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};
